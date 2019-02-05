import { GraphQLSchema } from 'graphql'
import { schemaToTemplateContext } from 'graphql-codegen-core'
import { renderSchemaScalarTypes } from './renderSchemaScalarTypes'
import { SchemaTemplateContext } from 'graphql-codegen-core'
import { renderSchemaTSTypes } from './renderSchemaTSTypes'

export const renderGraphTypeClient = (opts: {
  schema: GraphQLSchema
  extraScalars: object
  clientName: string
  importOverride: string
}) => {
  const { schema, extraScalars, clientName, importOverride } = opts
  const context: SchemaTemplateContext = schemaToTemplateContext(schema)

  const schemaScalarTypes = renderSchemaScalarTypes(context, extraScalars)
  const schemaTSTypes = renderSchemaTSTypes(context, extraScalars)
  const importLiteral =
    importOverride || `import {Graphtype, t} from 'graphtype'`

  return `
${importLiteral}

${schemaScalarTypes}

${schemaTSTypes}

export const ${clientName || 'graphtype'} = new Graphtype<IQuery,
  IMutation,
  ISubscription,
  IARGQuery,
  IARGMutation,
  IARGSubscriptio>()`
}
