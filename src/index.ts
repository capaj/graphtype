import { OperationVariable, Fragments } from './types'
import { compileToGql } from './compileToGql'

export { types } from './types'
export { types as t } from './types'

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

export function graphtype<QueryTypes, ParamTypes>() {
  return (
    queryObject: DeepPartial<QueryTypes>,
    opts: {
      query?: string
      mutation?: string
      subscription?: string
      params?: DeepPartial<ParamTypes>
    } = {}
  ) => {
    let op = 'query'
    let operationName = opts.query
    if (opts.mutation) {
      op = 'mutation'
      operationName = opts.mutation
    } else if (opts.subscription) {
      op = 'subscription'
      operationName = opts.subscription
    }
    return `${op} ${compileToGql(queryObject, opts.params, operationName)}`
  }
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
