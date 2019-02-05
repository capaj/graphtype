import {
  SchemaTemplateContext,
  Field,
  Enum,
  Interface,
  Type
} from 'graphql-codegen-core'
const defaultScalars = ['Boolean', 'Float', 'Int', 'String', 'DateTime', 'ID']
const enums = new Set()

export const renderSchemaScalarTypes = (
  schemaContext: SchemaTemplateContext,
  extraScalars: any
) => {
  let graphTypeTypeDef = ''

  const isScalarOrEnum = (typeName: string) => {
    if (defaultScalars.includes(typeName)) {
      return true
    }
    if (extraScalars[typeName]) {
      return true
    }
    if (enums.has(typeName)) {
      return true
    }
    return false
  }

  const renderField = (field: Field) => {
    let renderedType: string
    if (enums.has(field.type)) {
      renderedType = renderers.enumProp(field)
    } else {
      renderedType = renderers.fieldProp(field)
    }
    return `${field.name}: ${renderedType}`
  }

  const renderers = {
    interface({ name: intfName, fields: intfFields }: Interface) {
      // console.log('intfFields: ', intfFields)
      const fields = intfFields
        .filter((field: Field) => isScalarOrEnum(field.type)) // ignore non scalar types
        .map(renderField)
        .join(', \n\t')
      return `export const I${intfName} = {
\t${fields}
}`
    },
    type({ name: typeName, fields: typeFields }: Type) {
      // console.log('intfFields: ', typeFields)
      const fields = typeFields
        .filter((field: Field) => isScalarOrEnum(field.type)) // ignore non scalar types

        .map(renderField)
        .join(', \n\t')
      return `export const OT${typeName} = {
\t${fields}
}`
    },
    fieldProp(field: Field) {
      const nullableModifier = field.isRequired ? '' : '.nullable'
      let { type } = field
      if (extraScalars[type]) {
        type = extraScalars[type].type // we exchange the actual scalar type for a runtime type
      }
      return `t${nullableModifier}.${type}`
    },
    enumProp(field: Field) {
      const nullableModifier = field.isRequired ? '' : '.nullable'
      let { type } = field
      if (extraScalars[type]) {
        type = extraScalars[type].type // we exchange the actual scalar type for a runtime type
      }
      return `t${nullableModifier}.enum(${type})`
    },
    enumTypeDefinition(en: Enum) {
      const { name, values } = en
      enums.add(name)
      return `enum ${name} {
  ${values.map((val) => `'${val.value}'`).join(', \n\t')}
}`
    }
  }

  graphTypeTypeDef +=
    '\n// ENUMS \n' +
    schemaContext.enums
      .map((type) => renderers.enumTypeDefinition(type))
      .join('\n\n')

  graphTypeTypeDef +=
    '\n// INTERFACES \n' +
    schemaContext.interfaces
      .map((intf) => renderers.interface(intf))
      .join('\n\n')
  // console.log('context.types: ', context.types)
  graphTypeTypeDef +=
    '\n// OBJECT TYPES \n' +
    schemaContext.types.map((type) => renderers.type(type)).join('\n\n')

  return graphTypeTypeDef
}
