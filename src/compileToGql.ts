import { CoreType, RawType, OperationVariable } from './types'

export const paramsWeakMap = new WeakMap()

export const getParams = (params: any) => {
  if (!params) {
    return ''
  }
  const variables = Object.keys(params)
    .map((key) => {
      const paramValue = params[key]

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

// TODO: Tail Call Recursion
export const joinFieldRecursively = (fieldOrObject: any): string => {
  const joinedFields = Object.keys(fieldOrObject)
    .map((key) => {
      if (Array.isArray(fieldOrObject)) {
        return `${joinFieldRecursively(fieldOrObject[0])}`
      }
      if (
        typeof fieldOrObject[key] === 'object' &&
        !(fieldOrObject[key] instanceof CoreType)
      ) {
        return `${key} { ${joinFieldRecursively(fieldOrObject[key])} }`
      }
      return key
    })
    .join(' ')
  return joinedFields
}

export function compileToGql(queryObject: any, opName: string) {
  const operationParamsObject: {
    [key: string]: CoreType | OperationVariable | RawType
  } = {}
  const fields = Object.keys(queryObject)
    .map((fieldName) => {
      // console.log('dataType: ', fieldName)
      const fieldValue = queryObject[fieldName]
      const paramsObject = paramsWeakMap.get(fieldValue)

      let params = ''
      if (paramsObject) {
        Object.keys(paramsObject).forEach((paramName) => {
          const newParamDef = paramsObject[paramName]
          // console.log('newParamDef: ', newParamDef, paramName)
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
      }
      const joinedFields = joinFieldRecursively(fieldValue)
      return `${fieldName}${params} { ${joinedFields} }`
    })
    .join(' ')
  // console.log('operationParamsObject: ', operationParamsObject)
  const operationParamsPresent = Object.keys(operationParamsObject).length > 0
  if (operationParamsPresent) {
    const operationParamsString = `(${Object.entries(operationParamsObject)
      .map(([key, value]) => {
        if (value instanceof OperationVariable) {
          const exclamationMark = value.coreType.optional ? '' : '!'
          return '$' + key + ': ' + value.coreType.type + exclamationMark
        } else if (value instanceof CoreType) {
          const exclamationMark = value.optional ? '' : '!'
          return '$' + key + ': ' + value.type + exclamationMark
        } else if (value instanceof RawType) {
          return '$' + key + ': ' + value.raw
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
