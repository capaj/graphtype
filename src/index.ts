import { OperationVariable, Fragments } from './types'
import { compileToGql, paramsWeakMap } from './compileToGql'

export { types } from './types'

export const graphqlify = {
  query(queryObject: any, operationName: string = '') {
    return `query ${compileToGql(queryObject, operationName)}`
  },
  mutation(queryObject: any, operationName: string = '') {
    return `mutation ${compileToGql(queryObject, operationName)}`
  },
  subscription(queryObject: any, operationName: string = '') {
    return `subscription ${compileToGql(queryObject, operationName)}`
  }
}

export function params<T extends object>(params: object, fields: T): T {
  paramsWeakMap.set(fields, params)
  return fields
}

export function $(varName: string, type: any) {
  return new OperationVariable(varName, type)
}

// Names of properties in T with types that include undefined
type OptionalPropertyNames<T> = {
  [K in keyof T]: undefined extends T[K] ? K : never
}[keyof T]

type Diff<T, U> = T extends U ? never : T
// Common properties from L and R with undefined in R[K] replaced by type in L[K]
type SpreadProperties<L, R, K extends keyof L & keyof R> = {
  [P in K]: L[P] | Diff<R[P], undefined>
}

// Type of { ...L, ...R }
type Spread<L, R> =
  // Properties in L that don't exist in R
  Pick<L, Diff<keyof L, keyof R>> &
    // Properties in R with types that exclude undefined
    Pick<R, Diff<keyof R, OptionalPropertyNames<R>>> &
    // Properties in R, with types that include undefined, that don't exist in L
    Pick<R, Diff<OptionalPropertyNames<R>, keyof L>> &
    // Properties in R, with types that include undefined, that exist in L
    SpreadProperties<L, R, OptionalPropertyNames<R> & keyof L>

export function fragment<
  AT extends object,
  T extends object,
  TK extends keyof T
>(onAllObject: AT, onTypesObject: T): Spread<AT, T[TK]> {
  return new Fragments(onAllObject, onTypesObject) as any
}
