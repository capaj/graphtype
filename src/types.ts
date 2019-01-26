export type GraphQLData<T extends {}> = {
  value: T[keyof T]
}['value']

export function nullable<T>(obj: T): T | null {
  if (obj instanceof CoreType) {
    const newCoreType = new CoreType(obj.type)
    newCoreType.nullable = true
    return (newCoreType as any) as T
  }
  return obj
}
export function constant<T extends string>(c: T): T {
  return c
}
export function oneOf<T extends {}>(e: T): keyof T {
  return Object.keys(e)[0] as keyof T
}

function custom<T>(): T {
  return '' as any
}

export enum TypeFlags {
  String = 'String',
  Number = 'Number',
  Boolean = 'Boolean',
  Date = 'Date'
}
export class CoreType {
  type: TypeFlags
  nullable: boolean = false
  constructor(type: TypeFlags) {
    this.type = type
  }
}
export class RawType {
  raw: string
  constructor(raw: string) {
    this.raw = raw
  }
}

export class OperationVariable {
  coreType: CoreType
  varName: string
  constructor(varName: string, coreType: CoreType) {
    this.coreType = coreType
    this.varName = varName
  }
}

export class Fragments {
  onAllObject: object
  onTypes: object
  constructor(onAllObject: object, onTypesObject: object) {
    this.onAllObject = onAllObject
    this.onTypes = onTypesObject
  }
}

export class types {
  static number: number = (new CoreType(TypeFlags.Number) as any) as number
  static string: string = (new CoreType(TypeFlags.String) as any) as string
  static boolean: boolean = (new CoreType(TypeFlags.Boolean) as any) as boolean
  static Date: Date = (new CoreType(TypeFlags.Date) as any) as Date
  static optional: Partial<typeof types> = types
  static constant = constant
  static oneOf = oneOf
  static custom = custom
  static raw(name: string) {
    return new RawType(name)
  }
}
