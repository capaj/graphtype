import { GraphQLSchema } from 'graphql'
import { schemaToTemplateContext } from 'graphql-codegen-core'

const defaultScalars = ['Boolean', 'Float', 'Int', 'String', 'DateTime', 'ID']

export const renderSchemaScalarTypes = (
  schema: GraphQLSchema,
  extraScalars: object
) => {
  let graphTypeTypeDef = ''
  const context = schemaToTemplateContext(schema)

  const isScalar = (typeName) => {
    if (defaultScalars.includes(typeName)) {
      return true
    }
    if (extraScalars[typeName]) {
      return true
    }
    return false
  }

  const renderers = {
    interface({ name: intfName, fields: intfFields }) {
      // console.log('intfFields: ', intfFields)
      const fields = intfFields
        .filter((field) => isScalar(field.type)) // ignore non scalar types
        .map((field) => {
          const renderedType = this.fieldType(field)
          return `${field.name}: ${renderedType}`
        })
        .join(', \n\t')
      return `export const I${intfName} = {
\t${fields}
})`
    },
    type({ name: typeName, fields: typeFields }) {
      // console.log('intfFields: ', typeFields)
      const fields = typeFields
        .filter((field) => isScalar(field.type)) // ignore non scalar types

        .map((field) => {
          const renderedType = this.fieldType(field)
          return `${field.name}: ${renderedType}`
        })
        .join(', \n\t')
      return `export const OT${typeName} = {
\t${fields}
}`
    },
    fieldType(field) {
      const nullableModifier = field.isRequired ? '' : '.nullable'
      let { type } = field
      if (extraScalars[type]) {
        type = extraScalars[type].type // we exchange the actual scalar type for a runtime type
      }
      return `t${nullableModifier}.${type}`
    }
  }

  // console.log('context: ', context)
  graphTypeTypeDef += context.interfaces
    .map((intf) => renderers.interface(intf))
    .join('\n\n')
  // console.log('context.types: ', context.types)
  graphTypeTypeDef += context.types
    .map((type) => renderers.type(type))
    .join('\n\n')
  return graphTypeTypeDef
}
