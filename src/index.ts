import { OperationVariable, Fragments } from './types'
import { compileToGql } from './compileToGql'
import { Spread, DeepPartial } from './tsUtilTypes'

export { types } from './types'
export { types as t } from './types'

export class Graphtype<
  QueryType,
  MutationType,
  SubscriptionType,
  QueryParamTypes,
  MutationParamType,
  SubscriptionParamType
> {
  private renderGql(
    queryObject: DeepPartial<QueryType | MutationType | SubscriptionType>,
    paramsObjectOrOperationName?:
      | DeepPartial<QueryParamTypes | MutationParamType | SubscriptionParamType>
      | string,
    op: string = 'query',
    operationName?: string
  ) {
    if (typeof paramsObjectOrOperationName === 'string') {
      return `${op} ${compileToGql(
        queryObject,
        null,
        paramsObjectOrOperationName
      )}`
    } else {
      return `${op} ${compileToGql(
        queryObject,
        paramsObjectOrOperationName,
        operationName
      )}`
    }
  }
  query(
    schemaObject: DeepPartial<QueryType>,
    paramsObjectOrOperationName?: DeepPartial<QueryParamTypes> | string,
    operationName?: string
  ) {
    return this.renderGql(
      schemaObject,
      paramsObjectOrOperationName,
      'query',
      operationName
    )
  }
  mutation(
    schemaObject: DeepPartial<MutationType>,
    paramsObjectOrOperationName?: DeepPartial<MutationParamType> | string,
    operationName?: string
  ) {
    return this.renderGql(
      schemaObject,
      paramsObjectOrOperationName,
      'mutation',
      operationName
    )
  }
  subscription(
    queryObject: DeepPartial<SubscriptionType>,
    paramsObjectOrOperationName?: DeepPartial<SubscriptionParamType> | string,
    operationName?: string
  ) {
    return this.renderGql(
      queryObject,
      paramsObjectOrOperationName,
      'subscription',
      operationName
    )
  }
}

export function $(varName: string, type: any) {
  return new OperationVariable(varName, type)
}

export function fragment<
  AT extends object,
  T extends object,
  TK extends keyof T
>(onAllObject: AT, onTypesObject: T): Spread<AT, T[TK]> {
  return new Fragments(onAllObject, onTypesObject) as any
}
