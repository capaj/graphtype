import { graphtype, types } from './index'
// import { optional } from './types'
// import { GraphQLData } from './index'
import { gql } from './test-utils'

describe('graphqlify', () => {
  let query: any
  beforeEach(function() {
    query = graphtype()
  })
  it('render GraphQL', () => {
    const q = {
      user: {
        id: types.number,
        name: types.string,
        bankAccount: {
          id: types.number,
          branch: types.string
        }
      }
    }

    const typeQuery = graphtype<
      typeof q,
      {
        user: { id: number; name: string; bankAccount: { accId: number } }
      }
    >()

    const actual = typeQuery(
      {
        user: {
          id: types.number,
          name: types.string,
          bankAccount: {
            id: types.number,
            branch: types.string
          }
        }
      },
      { query: 'getUser', params: { user: { id: 1 } } }
    )

    expect(actual).toEqual(gql`
      query getUser {
        user(id: 1) {
          id
          name
          bankAccount {
            id
            branch
          }
        }
      }
    `)

    expect(
      query(
        {
          user: {
            id: types.number,
            name: types.string,
            bankAccount: {
              id: types.number,
              branch: types.string
            }
          }
        },
        {
          query: 'getUser',
          params: {
            user: { id: 2, name: 'Michel', bankAccount: { accId: 51 } }
          }
        }
      )
    ).toEqual(gql`
      query getUser {
        user(id: 2, name: "Michel") {
          id
          name
          bankAccount(accId: 51) {
            id
            branch
          }
        }
      }
    `)
  })

  it('render no params GraphQL', () => {
    const queryObject = {
      user: {
        id: types.number
      }
    }

    expect(query(queryObject, { query: 'getUser' })).toEqual(gql`
      query getUser {
        user {
          id
        }
      }
    `)
  })

  it('render very deep GraphQL', () => {
    const queryObject = {
      user: {
        student: {
          mother: {
            father: {
              id: types.number
            }
          }
        }
      }
    }
    const actual = query(queryObject, { query: 'getUser' })

    expect(actual).toEqual(gql`
      query getUser {
        user {
          student {
            mother {
              father {
                id
              }
            }
          }
        }
      }
    `)
  })

  it('renders string params in quotes', () => {
    const queryObject = {
      user: {
        id: types.number
      }
    }

    expect(
      query(queryObject, {
        query: 'getActiveUsers',
        params: { user: { status: 'active' } }
      })
    ).toEqual(gql`
      query getActiveUsers {
        user(status: "active") {
          id
        }
      }
    `)
  })

  it('renders multiple GraphQL', () => {
    const queryObject = {
      user: {
        id: types.number
      },
      bankAccount: {
        id: types.number
      }
    }

    expect(query(queryObject, { query: 'getUser' })).toEqual(gql`
      query getUser {
        user {
          id
        }
        bankAccount {
          id
        }
      }
    `)
  })

  it('render multiple GraphQL and params', () => {
    expect(
      query(
        {
          user: {
            id: types.number
          },
          bankAccount: {
            id: types.number
          }
        },
        {
          query: 'getUser',
          params: { user: { id: 1 }, bankAccount: { id: 2 } }
        }
      )
    ).toEqual(gql`
      query getUser {
        user(id: 1) {
          id
        }
        bankAccount(id: 2) {
          id
        }
      }
    `)
  })

  // it('render variable param and name it the same', () => {
  //   const query = graphtype.query(
  //     {
  //       user: params(
  //         { id: optional(types.number) },
  //         {
  //           id: types.number
  //         }
  //       )
  //     },
  //     'getUserById'
  //   )

  //   expect(query).toEqual(gql`
  //     query getUserById($id: Number) {
  //       user(id: $id) {
  //         id
  //       }
  //     }
  //   `)
  // })

  // it('render variable params with an alias', () => {
  //   // const paramsObject = {
  //   //   userId: types.number,
  //   //   bankAccountId: types.number
  //   // }

  //   const queryObject = {
  //     user: params(
  //       { id: $('userId', optional(types.number)) },
  //       {
  //         id: types.number
  //       }
  //     ),
  //     bankAccount: params(
  //       { id: optional(types.number) },
  //       {
  //         id: types.number
  //       }
  //     )
  //   }
  //   const actual = graphtype.query(queryObject, 'getUserAndBankAccount')

  //   expect(actual).toEqual(gql`
  //     query getUserAndBankAccount($userId: Number, $id: Number) {
  //       user(id: $userId) {
  //         id
  //       }
  //       bankAccount(id: $id) {
  //         id
  //       }
  //     }
  //   `)
  // })

  // it('render mutation', () => {
  //   const queryObject = {
  //     updateUser: params(
  //       { name: types.string },
  //       {
  //         id: types.number
  //       }
  //     )
  //   }
  //   const actual = graphtype.mutation(queryObject, 'updateUser')

  //   expect(actual).toEqual(gql`
  //     mutation updateUser($name: String!) {
  //       updateUser(name: $name) {
  //         id
  //       }
  //     }
  //   `)
  // })

  // it('render mutation with custom type name', () => {
  //   const queryObject = {
  //     updateUser: params(
  //       { input: types.raw('UserInput') },
  //       {
  //         id: types.number
  //       }
  //     )
  //   }
  //   const actual = graphtype.mutation(queryObject, 'updateUser')

  //   expect(actual).toEqual(gql`
  //     mutation updateUser($input: UserInput) {
  //       updateUser(input: $input) {
  //         id
  //       }
  //     }
  //   `)
  // })

  // it('render optional field', () => {
  //   const queryObject = {
  //     user: optional({
  //       id: types.number
  //     })
  //   }
  //   const actual = graphtype.query(queryObject, 'getUser')

  //   expect(actual).toEqual(gql`
  //     query getUser {
  //       user {
  //         id
  //       }
  //     }
  //   `)
  // })

  // it('render array field', () => {
  //   const queryObject = {
  //     users: [
  //       {
  //         id: types.number
  //       }
  //     ]
  //   }
  //   const actual = graphtype.query(queryObject, 'getUsers')

  //   expect(actual).toEqual(gql`
  //     query getUsers {
  //       users {
  //         id
  //       }
  //     }
  //   `)
  // })

  // it('render __typename itself', () => {
  //   const queryObject = {
  //     users: {
  //       id: types.number,
  //       __typename: types.constant('User')
  //     }
  //   }
  //   const actual = graphtype.query(queryObject, 'getUsers')

  //   // just type check
  //   // const a: GraphQLData<typeof queryObject> = {
  //   //   users: {
  //   //     id: 1,
  //   //     __typename: 'User',
  //   //   },
  //   // }

  //   expect(actual).toEqual(gql`
  //     query getUsers {
  //       users {
  //         id
  //         __typename
  //       }
  //     }
  //   `)
  // })

  // it('render parameters when array', () => {
  //   const queryObject = {
  //     users: params({ status: types.string }, [
  //       {
  //         id: types.number
  //       }
  //     ])
  //   }
  //   const actual = graphtype.query(queryObject, 'getUsers')

  //   expect(actual).toEqual(gql`
  //     query getUsers($status: String!) {
  //       users(status: $status) {
  //         id
  //       }
  //     }
  //   `)
  // })

  // it('render enum', () => {
  //   enum UserType {
  //     'Student',
  //     'Teacher'
  //   }

  //   const queryObject = {
  //     user: {
  //       id: types.number,
  //       type: types.oneOf(UserType)
  //     }
  //   }
  //   const actual = graphtype.query(queryObject, 'getUser')

  //   // just type check
  //   // const a: GraphQLData<typeof queryObject> = {
  //   //   user: {
  //   //     id: 1,
  //   //     type: 'foo',
  //   //   },
  //   // }

  //   expect(actual).toEqual(gql`
  //     query getUser {
  //       user {
  //         id
  //         type
  //       }
  //     }
  //   `)
  // })

  // it.skip('renders inline fragment spread', async () => {
  //   const queryObject = {
  //     users: [
  //       fragment(
  //         {
  //           id: types.number
  //         },
  //         {
  //           AdminUser: {
  //             email: types.string
  //           },
  //           RegularUser: {
  //             created_at: types.string
  //           }
  //         }
  //       )
  //     ]
  //   }
  //   // console.log(queryObject.users[1].)
  //   const actual = graphtype.query(queryObject, 'getUsers')

  //   expect(actual).toEqual(gql`
  //     query getUsers {
  //       users {
  //         id
  //         ... on AdminUser {
  //           email
  //         }
  //         ... on RegularUser {
  //           created_at
  //         }
  //       }
  //     }
  //   `)
  // })

  // it('render custom scalar property', () => {
  //   interface CustomField {
  //     id: number
  //   }

  //   const queryObject = {
  //     users: {
  //       id: types.number,
  //       customField: types.custom<CustomField>()
  //     }
  //   }
  //   const actual = graphtype.query(queryObject, 'getUsers')

  //   expect(actual).toEqual(gql`
  //     query getUsers {
  //       users {
  //         id
  //         customField
  //       }
  //     }
  //   `)
  // })
})
