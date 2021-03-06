[![npm version](https://badge.fury.io/js/graphtype.svg)](https://badge.fury.io/js/graphtype)
[![Build Status](https://travis-ci.org/capaj/graphtype.svg?branch=master)](https://travis-ci.org/capaj/graphtype)

# DEPRECATED

use https://graphql-code-generator.com/docs/getting-started/index instead. It provides much better DX.

# graphtype

Build Type-safe GraphQL Queries in TypeScript. Let the compiler typecheck your queries.

![image](https://media.giphy.com/media/3o7TKsclBJdn4dSEPC/giphy.gif)

# Install

```
npm install graphtype
```

Or if you use Yarn:

```
yarn add graphtype
```

# Motivation

GraphQL is great and solves many problems, like overfetching and underfetching. Although writing queries is sometimes a bit of pain. Why? Let's take a look at the example we usually have to make.

When we use GraphQL library such as Apollo, We usually define query and its interface like this:

```typescript
interface GetUserQueryData {
  getUser: {
    id: number
    name: string
    bankAccount: {
      id: number
      branch?: string
    }
  }
}

const query = graphql(gql`
  query getUser {
    user {
      id
      name
      bankAccount {
        id
        branch
      }
    }
  }
`)

apolloClient.query<GetUserQueryData>(query).then(data => ...)
```

This is duplicates the shape of the object.
To add a new field to our entity, we have to edit both GraphQL query and TypeScript interface. And TS checking does not work if we do something wrong.

**graphtype** tries to solve this. The main idea is to have only one source of truth by defining the schema using GraphQL-like object and a bit of helper class.

# How to use

First, define GraphQL-like JS Object:

```typescript
import { graphqlify, t, params } from 'graphtype'

const getUserQuery = {
  user: params(
    { id: 1 },
    {
      id: t.Number,
      name: t.String,
      bankAccount: {
        id: t.Number,
        branch: t.nullable.String
      }
    }
  )
}
```

Note that we use our `types` helper to define types in the result.

Then, convert the JS Object to GraphQL (String) with `graphqlify`:

```typescript
const gqlString = graphqlify.query(getUserQuery)

console.log(gqlString)
// =>
//   query {
//     user(id: 1) {
//       id
//       name
//       bankAccount {
//         id
//         branch
//       }
//     }
//   }
```

Finally, execute the GraphQL:

```typescript
// GraphQLData is a type helper which returns one level down
import { GraphQLData } from 'graphtype'
import { executeGraphql } from 'some-graphql-request-library'

// We would like to type this!
const result: GraphQLData<typeof getUserQuery> = await executeGraphql(gqlString)

// As we cast `result` to `typeof getUser`,
// Now, `result` type looks like this:
// interface result {
//   user: {
//     id: Number
//     name: String
//     bankAccount: {
//       id: Number
//       branch?: String
//     }
//   }
// }
```

# Features

- Nested Query
- Array Query
- Input variables, parameters
- Query and Mutation
- Nullable types

# Examples

## Basic Query

```graphql
query getUser {
  user {
    id
    name
    isActive
  }
}
```

```typescript
graphqlify.query(
  {
    user: {
      id: types.Number,
      name: types.String,
      isActive: types.boolean
    }
  },
  'getUser'
)
```

## Basic Mutation

Change the first argument of `graphqlify` to `mutation`.

```graphql
mutation updateUser($input: UserInput!) {
  updateUser(input: $input) {
    id
    name
  }
}
```

```typescript
graphqlify.mutation(
  {
    updateUser: params(
      { input: types.raw('UserInput') },
      {
        id: types.Number
      }
    )
  },
  'updateUser'
)
```

## Mutation with a named variable

By default graphql variables are named the same as they are defined in the field. When you have multiple fields with the same variable name, you need to rename them. Use `$` for this:

```typescript
import { graphqlify, types, params, $ } from 'graphtype'
graphqlify.mutation(
  {
    updateUser: params(
      { input: $('userInput', types.raw('UserInput')) },
      {
        id: types.Number
      }
    )
  },
  'updateUser'
)
```

this results as:

```graphql
mutation updateUser($userInput: UserInput!) {
  updateUser(input: $userInput) {
    id
    name
  }
}
```

## Nested Query

Write nested object just like GraphQL.

```graphql
query getUser {
  user {
    id
    name
    parent {
      id
      name
      grandParent {
        id
        name
        children {
          id
          name
        }
      }
    }
  }
}
```

```typescript
graphqlify.query(
  {
    user: {
      id: types.Number,
      name: types.String,
      parent: {
        id: types.Number,
        name: types.String,
        grandParent: {
          id: types.Number,
          name: types.String,
          children: {
            id: types.Number,
            name: types.String
          }
        }
      }
    }
  },
  'getUser'
)
```

## Array Field

Just add array to your query. This does not change the result of compile, but TypeScript can aware the field is array.

```graphql
query getUsers {
  users(status: 'active') {
    id
    name
  }
}
```

```typescript
graphqlify.query(
  {
    users: params({ status: types.String }, [
      {
        id: types.Number
      }
    ])
  },
  'getUsers'
)
```

## Nullable Fields

Add `types.nullable` or `nullable` helper method to define nullable field.

```typescript
import { types, nullable } from 'graphtype'

graphqlify.query(
  {
    user: {
      id: types.Number,
      name: types.nullable.String, // <-- user.name is `String | undefined`
      bankAccount: nullable({
        // <-- user.bankAccount is `{ id: Number } | undefined`
        id: types.Number
      })
    }
  },
  'getUser'
)
```

## Constant field

Use `types.constant` method to define constant field.

```graphql
query getUser {
  user {
    id
    name
    __typename # <-- Always `User`
  }
}
```

```typescript
graphqlify.query(
  {
    user: {
      id: types.Number,
      name: types.String,
      __typename: types.constant('User')
    }
  },
  'getUser'
)
```

## Enum field

Use `types.enum` method to define Enum field.

```graphql
query getUser {
  user {
    id
    name
    type # <-- `Student` or `Teacher`
  }
}
```

```typescript
enum UserType {
  'Student',
  'Teacher'
}

graphqlify.query(
  {
    user: {
      id: types.Number,
      name: types.String,
      type: types.enum(UserType)
    }
  },
  'getUser'
)
```

Note: Currently creating type from array element is not supported in TypeScript. See https://github.com/Microsoft/TypeScript/issues/28046

## Multiple Queries

Add other queries at the same level of the other query.

```graphql
query getFatherAndMother {
  father {
    id
    name
  }
  mother {
    id
    name
  }
}
```

```typescript
graphqlify.query(
  {
    father: {
      id: types.Number,
      name: types.String
    },
    mother: {
      id: types.Number,
      name: types.Number
    }
  },
  'getFatherAndMother'
)
```

See more examples at [`src/index.test.ts`](https://github.com/capaj/graphtype/blob/master/src/index.test.ts)

# Why not use `apollo client:codegen`?

There are some GraphQL -> TypeScript convertion tools. The most famous one is Apollo codegen:

https://github.com/apollographql/apollo-tooling#apollo-clientcodegen-output

In this section, we would like to explain why `graphtype` comes.

Disclaimer: I am not a heavy user of Apollo codegen, so the following points could be wrong. And I totally don't disrespect Apollo codegen.

## Simplicity

Apollo codegen is a great tool. In addition to generating query interfaces, it does a lot of tasks including downloading schema, schema validation, fragment spreading, etc.

However, great usability is the tradeoff of complexity.

There are some issues to generate interfaces with Apollo codegen.

- https://github.com/apollographql/apollo-tooling/issues/791
- https://github.com/apollographql/apollo-tooling/issues/678

I (and maybe everyone) don't know the exact reasons, but Apollo's codebase is too large to find out what is the problem.

On the other hand, `graphtype` is as simple as possible tool by design, and the logic is quite easy. So I think if some issues happen we can fix them easily.

## Multiple Schema problem

Currently Apollo codegen cannot handle multiple schemas.

- https://github.com/apollographql/apollo-tooling/issues/588
- https://github.com/apollographql/apollo-tooling/issues/554

# Related projects

This project was initially forked from an early version of

- https://github.com/acro5piano/typed-graphqlify

Currently it is much more like this project: https://github.com/helios1138/graphql-typed-client

- Probably most important difference is graphql-typed-client requires [whole schema.json to be loaded at runtime](https://github.com/helios1138/graphql-typed-client/issues/7). This generated file can be very big for complex schemas, so that's why I decided to maintain project as a ligtweight alternative to graphql-typed-client.
