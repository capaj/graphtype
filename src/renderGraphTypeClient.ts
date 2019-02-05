import { GraphQLSchema } from 'graphql'
import { schemaToTemplateContext } from 'graphql-codegen-core'
import { renderSchemaScalarTypes } from './renderSchemaScalarTypes'
import { SchemaTemplateContext } from '../node_modules/graphql-codegen-core/dist/types'
import { renderSchemaTSTypes } from './renderSchemaTSTypes'

export const renderGraphTypeClient = (opts: {
  schema: GraphQLSchema
  extraScalars: object
  clientName: string
}) => {
  const { schema, extraScalars, clientName } = opts
  const context: SchemaTemplateContext = schemaToTemplateContext(schema)

  const schemaScalarTypes = renderSchemaScalarTypes(context, extraScalars)
  const schemaTSTypes = renderSchemaTSTypes(context, extraScalars)
  return `
import {Graphtype, t} from 'graphtype'

${schemaScalarTypes}

${schemaTSTypes}

export const ${clientName || 'graphtype'} = new Graphtype<IQuery,
  IMutation,
  ISubscription,
  IARGQuery,
  IARGMutation,
  IARGSubscriptio>()`
}
