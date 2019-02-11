import { CoreType, RawType, OperationVariable } from './types'
import { get, isObject } from 'lodash'
import debug from 'debug'
const log = debug('graphtype')

const operationParamTypes = [CoreType, OperationVariable, RawType]

export const getParams = (params: any) => {
  if (!params) {
    return ''
  }
  const variables = Object.keys(params)
    .filter((key) => {
      log('key: ', key)
      const paramValue = params[key]
      if (
        operationParamTypes.find((t) => {
          return paramValue instanceof t
        })
      ) {
        return true
      }
      const skip = !isObject(paramValue) && !paramValue.__typename

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
  return `(${variables})`
}

export function compileToGql(
  queryObject: any,
  allParamsObject: any,
  opName?: string
) {
  const operationParamsObject: {
    [key: string]: CoreType | OperationVariable | RawType
  } = {}

  const joinFieldRecursively = (
    fieldOrObject: any,
    parentPath: string
  ): string => {
    log('fieldOrObject: ', fieldOrObject)
    const joinedFields = Object.keys(fieldOrObject)
      .map((key) => {
        log('key: ', key, parentPath)
        const paramValue = get(allParamsObject, `${parentPath}.${key}`)
        log('paramValue: ', paramValue)

        let paramsAfterKey = ''
        if (isObject(paramValue)) {
          paramsAfterKey = getParams(paramValue)
        }
        if (Array.isArray(fieldOrObject)) {
          return `${joinFieldRecursively(
            fieldOrObject[0],
            parentPath
          )}${paramsAfterKey}`
        }
        if (
          typeof fieldOrObject[key] === 'object' &&
          !(fieldOrObject[key] instanceof CoreType)
        ) {
          return `${key}${paramsAfterKey} { ${joinFieldRecursively(
            fieldOrObject[key],
            parentPath + `.${key}`
          )} }`
        }

        return key
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

      let params = ''
      if (paramsObject) {
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
        params = getParams(paramsObject)
        log(`params "${fieldName}" compiled as: `, params)
      }
      const joinedFields = joinFieldRecursively(fieldValue, fieldName)
      // log('fieldValue: ', fieldValue)
      return `${fieldName}${params} { ${joinedFields} }`
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
