import {
  SchemaTemplateContext,
  Field,
  Interface,
  Enum,
  Union,
  Type,
  Argument
} from '../node_modules/graphql-codegen-core/dist/types'

const scalarsToTypesMap = {
  Boolean: 'boolean',
  Float: 'number',
  Int: 'number',
  String: 'string',
  DateTime: 'string',
  ID: 'string'
}
const enums = new Set()
const typesWithArgumentableFields: string[] = []

export const renderSchemaTSTypes = (
  schemaContext: SchemaTemplateContext,
  extraScalars: object,
  exportTypes: boolean = false
) => {
  const exportLiteral = exportTypes ? 'export ' : ''
  const typesWithNoArgumentableFields = schemaContext.types
    .filter((type) => !type.fields.find((field) => field.hasArguments))
    .map((type) => type.name)

  const interfacesWithNoArgumentableFields = schemaContext.interfaces
    .filter((type) => !type.fields.find((field) => field.hasArguments))
    .map((type) => type.name)

  const hasArgumentableFields = (type: string) =>
    !typesWithNoArgumentableFields.includes(type) &&
    !interfacesWithNoArgumentableFields.includes(type)

  Object.assign(scalarsToTypesMap, extraScalars)
  let graphTypeTypeDef = `type maybe<T> = T | null
interface IQuery{}
interface IMutation{}
interface ISubscription{}
interface IARGQuery{}
interface IARGMutation{}
interface IARGSubscriptio{}`

  const argInterfacePrefix = 'IARG'
  const mapGQLFieldOrArgToTS = (
    fieldOrArgument: Field | Argument,
    isForArgumentType: boolean
  ): string => {
    const {
      type,
      isUnion,
      isScalar,
      isEnum,
      isInterface,
      isType,
      isInputType,
      isRequired
    } = fieldOrArgument
    const mappedAs = scalarsToTypesMap[type]
    let typeLiteral = type
    if (mappedAs) {
      if (typeof mappedAs === 'object') {
        typeLiteral = mappedAs.type.toLowerCase()
      } else {
        typeLiteral = mappedAs
      }
    } else {
      if (isUnion || isEnum) {
        // typeLiteral = type
      } else if (isInterface || isType) {
        if (isForArgumentType && hasArgumentableFields(type)) {
          typeLiteral = `${argInterfacePrefix}${type}`
        } else {
          typeLiteral = `I${type}`
        }
      } else if (isInputType) {
        typeLiteral = `I${type}`
      } else if (isScalar) {
        // unknown scalar-we leave as any
        typeLiteral = 'any'
      }
    }

    if (isRequired) {
      return typeLiteral
    } else {
      return `maybe<${typeLiteral}>`
    }
  }
  const renderArgument = (arg: Argument) => {
    return `${arg.name}: ${mapGQLFieldOrArgToTS(arg, true)}`
  }

  const registerArgumentType = (type: Type | Interface) => {
    const { fields, name } = type
    if (!hasArgumentableFields(name)) {
      return
    }
    const fieldsWithArguments = fields // we need to create new a type from arguments
      .filter(
        ({ isType, isInterface, isUnion, hasArguments }) =>
          hasArguments && !(isType || isInterface || isUnion)
      )
      .map((field: Field) => {
        const { arguments: args } = field
        const argObjectTypeLiteral = `{
\t\t${args.map(renderArgument).join(', \n\t')}
\t}`
        return `${field.name}: ${argObjectTypeLiteral}`
      })
      .join(', \n\t')
    const fieldsWithArgumentsReturningAComplexType = fields // we need to create new a type from arguments and merge it with the object type
      .filter(
        ({ isType, isInterface, isUnion, hasArguments }) =>
          (isType || isInterface || isUnion) && hasArguments
      )
      .map((field: Field) => {
        const { arguments: args } = field
        const argObjectTypeLiteral = `{
\t\t${args.map(renderArgument).join(', \n\t')}
\t}`
        return `${field.name}: ${argObjectTypeLiteral} & ${mapGQLFieldOrArgToTS(
          field,
          true
        )}`
      })
      .join(', \n\t')

    const fieldsReturningAComplexType = fields
      .filter(
        ({ isType, isInterface, isUnion, hasArguments }) =>
          (isType || isInterface || isUnion) && !hasArguments
      )
      .map(renderField)
      .join(', \n\t')

    const renderedFields = [
      fieldsWithArguments,
      fieldsReturningAComplexType,
      fieldsWithArgumentsReturningAComplexType
    ].filter(({ length }) => length > 0)
    const argsInterfaceLiteral = `${exportLiteral}interface ${argInterfacePrefix}${name} {
\t${renderedFields.join(',\n')}
}`
    typesWithArgumentableFields.push(argsInterfaceLiteral)
  }

  const renderField = (field: Field) => {
    return `${field.name}: ${mapGQLFieldOrArgToTS(field, false)}`
  }

  const renderers = {
    interface(intf: Interface) {
      const { name: intfName, fields: intfFields } = intf
      // console.log('intfFields: ', intfFields)
      registerArgumentType(intf)
      const possibleTypesEnumLiteral = intf.implementingTypes
        .map((typeName) => `I${typeName}`)
        .join(' | ')
      const fields = intfFields
        .map((field) => {
          return renderField(field)
        })
        .join(', \n\t')
      return `${exportLiteral}type I${intfName} = {
\t${fields}
} & (${possibleTypesEnumLiteral})`
    },
    type(type: Type) {
      const { name: typeName, fields: typeFields } = type
      // console.log('intfFields: ', typeFields)

      if (!type.isInputType) {
        registerArgumentType(type)
      }

      const fields = typeFields
        .map((field) => {
          return renderField(field)
        })
        .join(', \n\t')
      return `${exportLiteral}interface I${typeName} {
\t${fields}
}`
    },
    union(union: Union) {
      // console.log('intfFields: ', intfFields)
      const { name: unionName, possibleTypes } = union
      const typesTSUnion = possibleTypes.map((type) => `I${type}`).join(' | ')
      return `${exportLiteral}type ${unionName} = ${typesTSUnion}`
    },
    fieldProp(field: Field) {
      if (field.isRequired) {
        return `Maybe<${field.type}>`
      } else {
        return field.type
      }
    },
    enumProp(field: Field) {
      if (field.isRequired) {
        return `Maybe<${field.type}>`
      } else {
        return field.type
      }
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
    '\n// INTERFACES \n' +
    schemaContext.interfaces
      .map((intf) => renderers.interface(intf))
      .join('\n\n')

  graphTypeTypeDef +=
    '\n// OBJECT TYPES \n' +
    schemaContext.types.map((type) => renderers.type(type)).join('\n\n')

  graphTypeTypeDef +=
    '\n// UNION TYPES \n' +
    schemaContext.unions.map((type) => renderers.union(type)).join('\n\n')

  graphTypeTypeDef +=
    '\n// INPUT TYPES \n' +
    schemaContext.inputTypes.map((type) => renderers.type(type)).join('\n\n')

  graphTypeTypeDef +=
    '\n// ARGUMENT INTERFACES \n' + typesWithArgumentableFields.join('\n\n')
  return graphTypeTypeDef
}
