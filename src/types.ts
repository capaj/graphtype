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

export function oneOfNullable<T extends {}>(e: T): keyof T | null {
  return Object.keys(e)[0] as keyof T
}

function custom<T>(): T {
  return '' as any
}

export enum TypeFlags {
  String = 'String',
  Int = 'Int',
  Float = 'Float',
  Boolean = 'Boolean',
  Date = 'Date'
}
export class CoreType {
  type: TypeFlags
  nullable: boolean
  constructor(type: TypeFlags, nullable = false) {
    this.type = type
    this.nullable = nullable
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

class nullableTypes {
  static ID = (new CoreType(TypeFlags.String, true) as any) as string | null
  static Int = (new CoreType(TypeFlags.Int, true) as any) as number | null
  static Float = (new CoreType(TypeFlags.Float, true) as any) as number | null
  static String = (new CoreType(TypeFlags.String, true) as any) as string | null
  static Boolean = (new CoreType(TypeFlags.Boolean, true) as any) as
    | boolean
    | null
  static DateTime = (new CoreType(TypeFlags.Date, true) as any) as Date | null
  static oneOf = oneOfNullable
  static custom = custom
  static raw(name: string) {
    return new RawType(name)
  }
}

export class types {
  static ID: string = (new CoreType(TypeFlags.String, false) as any) as string
  static Int: number = (new CoreType(TypeFlags.Int, false) as any) as number
  static Float: number = (new CoreType(TypeFlags.Float, false) as any) as number
  static String: string = (new CoreType(
    TypeFlags.String,
    false
  ) as any) as string
  static Boolean: boolean = (new CoreType(
    TypeFlags.Boolean,
    false
  ) as any) as boolean
  static DateTime: Date = (new CoreType(TypeFlags.Date, false) as any) as Date
  static nullable = nullableTypes
  static constant = constant
  static oneOf = oneOf
  static custom = custom
  /**
   * use for custom queries
   */
  static raw(name: string) {
    return new RawType(name)
  }
}
