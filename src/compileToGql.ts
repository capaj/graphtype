import { CoreType, RawType, OperationVariable } from './types'
import { get, isObject } from 'lodash'
import debug from 'debug'
const log = debug('gt')

const operationParamTypes = [CoreType, OperationVariable, RawType]

export const getParams = (params: any) => {
  log('getParams: ', params)
  if (!params || !isObject(params)) {
    return ''
  }
  const variables = Object.keys(params)

    .filter((key) => {
      const paramValue = params[key]
      log('paramValue in filter: ', paramValue)
      log('key: ', key)
      if (
        operationParamTypes.find((t) => {
          return paramValue instanceof t
        })
      ) {
        return true
      }
      const skip = !isObject(paramValue)

      return skip // filter out objects without a typename-these are probably params for nested fields returned by the current field
    })
    .map((key) => {
      const paramValue = params[key]
      log('paramValue: ', paramValue)

      if (paramValue instanceof CoreType) {
        return `${key}: $${key}`
      } else if (paramValue instanceof OperationVariable) {
        return `${key}: $${paramValue.varName}`
      }
      if (paramValue instanceof RawType) {
        return `${key}: $${key}`
      } else {
        if (typeof paramValue === 'string') {
          return `${key}: "${paramValue}"` // string values need to be quoted
        } else {
          return `${key}: ${paramValue}`
        }
      }
    })
    .join(', ')
  log('variables: ', variables)
  if (variables.length === 0) {
    return ''
  }
  return `(${variables})`
}

export function compileToGql(
  queryObject: any,
  allParamsObject: any,
  opName: string = ''
) {
  const operationParamsObject: {
    [key: string]: CoreType | OperationVariable | RawType
  } = {}
  let operationParams = ''

  function addParamsToOperationParams(paramsObject: any, fieldName: string) {
    if (paramsObject) {
      if (paramsObject instanceof OperationVariable) {
        return ''
      }
      Object.keys(paramsObject).forEach((paramName) => {
        const newParamDef = paramsObject[paramName]
        // log('newParamDef: ', newParamDef, paramName)
        if (
          !(newParamDef instanceof CoreType) &&
          !(newParamDef instanceof OperationVariable) &&
          !(newParamDef instanceof RawType)
        ) {
          // this is just a raw value-we put it inline without naming a variable
          return
        }
        const existingParamDef = operationParamsObject[paramName]
        if (existingParamDef) {
          throw new Error(
            `variable for parameter "${paramName}" for field "${fieldName}" must be named as there already is a variable named as such`
          )
        }
        if (newParamDef instanceof OperationVariable) {
          operationParamsObject[newParamDef.varName] = newParamDef
        } else {
          operationParamsObject[paramName] = newParamDef
        }
      })
      operationParams = getParams(paramsObject)
      log(`params for field "${fieldName}" compiled as: `, operationParams)
    }
    return operationParams
  }

  const joinFieldRecursively = (
    fieldOrObject: any,
    parentPath: string
  ): string => {
    log('fieldOrObject: ', fieldOrObject)
    const joinedFields = Object.keys(fieldOrObject)
      .map((field) => {
        log('field: ', field, parentPath)
        const objectPath = `${parentPath}.${field}`
        const paramsObject = get(allParamsObject, objectPath)
        let paramsAfterField = ''
        const isGtType = operationParamTypes.find((t) => {
          return paramsObject instanceof t
        })
        log('paramsObject on path: ', objectPath, paramsObject)

        if (paramsObject && !isGtType) {
          paramsAfterField = addParamsToOperationParams(paramsObject, field)
        }
        log('paramsAfterKey: ', paramsAfterField)

        if (Array.isArray(fieldOrObject)) {
          return `${joinFieldRecursively(
            fieldOrObject[0],
            parentPath
          )}${paramsAfterField}`
        }
        if (
          typeof fieldOrObject[field] === 'object' &&
          !(fieldOrObject[field] instanceof CoreType)
        ) {
          return `${field}${paramsAfterField} { ${joinFieldRecursively(
            fieldOrObject[field],
            parentPath + `.${field}`
          )} }`
        }
        if (paramsAfterField) {
          return field + paramsAfterField
        }

        return field
      })
      .join(' ')
    log('joinedFields: ', joinedFields)
    return joinedFields
  }
  const fields = Object.keys(queryObject)
    .map((fieldName) => {
      log('fieldName: ', fieldName)

      const fieldValue = queryObject[fieldName]

      const paramsObject = get(allParamsObject, fieldName)
      log('paramsObject: ', paramsObject)

      const outerOperationParams = addParamsToOperationParams(
        paramsObject,
        fieldName
      )

      const joinedFields = joinFieldRecursively(fieldValue, fieldName)
      // log('fieldValue: ', fieldValue)
      return `${fieldName}${outerOperationParams} { ${joinedFields} }`
    })
    .join(' ')
  // log('operationParamsObject: ', operationParamsObject)
  const operationParamsPresent = Object.keys(operationParamsObject).length > 0
  if (operationParamsPresent) {
    const operationParamsString = `(${Object.entries(operationParamsObject)
      .map(([key, value]) => {
        if (value instanceof OperationVariable) {
          const exclamationMark = value.coreType.nullable ? '' : '!'
          return '$' + key + ': ' + value.coreType.type + exclamationMark
        } else if (value instanceof CoreType) {
          const exclamationMark = value.nullable ? '' : '!'
          return '$' + key + ': ' + value.type + exclamationMark
        } else if (value instanceof RawType) {
          const exclamationMark = value.nullable ? '' : '!'
          return '$' + key + ': ' + value.raw + exclamationMark
        }
        throw new Error(`unknown param type`)
      })
      .join(', ')})`
    return `${opName}${operationParamsString} { ${fields} }`
  } else {
    if (!opName) {
      return `{ ${fields} }`
    }
    return `${opName} { ${fields} }`
  }
}
