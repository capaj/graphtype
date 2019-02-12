import { Graphtype, t, $ } from './index'
import { nullable } from './types'
// import { GraphQLData } from './index'
import gql from 'graphql-tag'
import { print } from 'graphql'

function assertGQLEqual(actual, expected) {
  expect(print(actual)).toEqual(print(expected))
}

describe('graphqlify', () => {
  let gt: any
  beforeEach(function() {
    gt = new Graphtype()
  })
  it('render GraphQL', () => {
    enum BranchEnum {
      'Branch A',
      'Branch B'
    }

    const q = {
      user: {
        id: t.Int,
        name: t.String,
        bankAccount: {
          id: t.Int,
          branch: t.nullable.enum(BranchEnum)
        }
      }
    }

    const gt1 = new Graphtype<
      typeof q,
      {
        user: { id: number; name: string; bankAccount: { accId: number } }
      },
      {},
      {},
      {},
      {}
    >()

    const actual = gt1.query(
      {
        user: {
          id: t.Int,
          name: t.String,
          bankAccount: {
            id: t.Int,
            branch: t.nullable.enum(BranchEnum)
          }
        }
      },
      { user: { id: 1 } },
      'getUser'
    )
    assertGQLEqual(
      actual,
      gql`
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
      `
    )

    assertGQLEqual(
      gt.query(
        {
          user: {
            id: t.Int,
            name: t.String,
            bankAccount: {
              id: t.Int,
              branch: t.String
            }
          }
        },
        {
          user: { id: 2, name: 'Michel', bankAccount: { accId: 51 } }
        },
        'getUser'
      ),
      gql`
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
      `
    )
  })

  it('render no params GraphQL', () => {
    const queryObject = {
      user: {
        id: t.Int
      }
    }

    const q = gt.query(queryObject, 'getUser')

    assertGQLEqual(
      q,
      gql`
        query getUser {
          user {
            id
          }
        }
      `
    )
  })

  it('render very deep GraphQL', () => {
    const queryObject = {
      user: {
        student: {
          mother: {
            father: {
              id: t.Int
            }
          }
        }
      }
    }
    const actual = gt.query(queryObject, 'getUser')

    assertGQLEqual(
      actual,
      gql`
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
      `
    )
  })

  it('renders string params in quotes', () => {
    const queryObject = {
      user: {
        id: t.Int
      }
    }

    assertGQLEqual(
      gt.query(queryObject, { user: { status: 'active' } }, 'getActiveUsers'),
      gql`
        query getActiveUsers {
          user(status: "active") {
            id
          }
        }
      `
    )
  })

  it('renders multiple GraphQL', () => {
    const queryObject = {
      user: {
        id: t.Int
      },
      bankAccount: {
        id: t.Int
      }
    }

    assertGQLEqual(
      gt.query(queryObject, 'getUser'),
      gql`
        query getUser {
          user {
            id
          }
          bankAccount {
            id
          }
        }
      `
    )
  })

  it('render multiple GraphQL and params', () => {
    assertGQLEqual(
      gt.query(
        {
          user: {
            id: t.Int
          },
          bankAccount: {
            id: t.Int,
            type: t.nullable.String
          }
        },
        { user: { id: 1 }, bankAccount: { id: 2 } },
        'getUser'
      ),
      gql`
        query getUser {
          user(id: 1) {
            id
          }
          bankAccount(id: 2) {
            id
            type
          }
        }
      `
    )
  })

  it('render variable param and name it the same', () => {
    assertGQLEqual(
      gt.query(
        {
          user: {
            id: t.Int
          }
        },
        { user: { id: nullable(t.Int) } },
        'getUserById'
      ),
      gql`
        query getUserById($id: Int) {
          user(id: $id) {
            id
          }
        }
      `
    )
  })

  it('render raw variable param and name it the same', () => {
    assertGQLEqual(
      gt.query(
        {
          user: {
            id: t.Int
          }
        },
        { user: { filter: t.raw('UserFilter') } }
      ),
      gql`
        query($filter: UserFilter!) {
          user(filter: $filter) {
            id
          }
        }
      `
    )
  })

  it('render variable params with an alias', () => {
    const fragment = {
      id: t.Int
    }
    // const paramsObject = {
    //   userId: types.number,
    //   bankAccountId: types.number
    // }

    assertGQLEqual(
      gt.query(
        {
          user: fragment,
          bankAccount: fragment
        },
        {
          user: { id: $('userId', nullable(t.Int)) },
          bankAccount: {
            id: nullable(t.Int)
          }
        },
        'getUserAndBankAccount'
      ),
      gql`
        query getUserAndBankAccount($userId: Int, $id: Int) {
          user(id: $userId) {
            id
          }
          bankAccount(id: $id) {
            id
          }
        }
      `
    )
  })

  it('render mutation', () => {
    assertGQLEqual(
      gt.mutation(
        {
          updateUser: {
            id: t.Int
          }
        },
        { updateUser: { name: t.String } },
        'updateUser'
      ),
      gql`
        mutation updateUser($name: String!) {
          updateUser(name: $name) {
            id
          }
        }
      `
    )
  })

  it('render mutation with custom type name', () => {
    assertGQLEqual(
      gt.mutation(
        {
          updateUser: {
            id: t.Int
          }
        },
        { updateUser: { input: t.nullable.raw('UserInput') } },
        'updateUser'
      ),
      gql`
        mutation updateUser($input: UserInput) {
          updateUser(input: $input) {
            id
          }
        }
      `
    )
  })

  it('render nullable field', () => {
    assertGQLEqual(
      gt.query(
        {
          user: nullable({
            id: t.Int
          })
        },
        'getUser'
      ),
      gql`
        query getUser {
          user {
            id
          }
        }
      `
    )
  })

  it('render array field', () => {
    assertGQLEqual(
      gt.query(
        {
          users: [
            {
              id: t.Int
            }
          ]
        },
        'getUsers'
      ),
      gql`
        query getUsers {
          users {
            id
          }
        }
      `
    )
  })

  it('render __typename itself', () => {
    // just type check
    // const a: GraphQLData<typeof queryObject> = {
    //   users: {
    //     id: 1,
    //     __typename: 'User',
    //   },
    // }

    assertGQLEqual(
      gt.query({
        users: {
          id: t.Int,
          __typename: t.constant('User')
        }
      }),
      gql`
        query {
          users {
            id
            __typename
          }
        }
      `
    )
  })

  it('render parameters when array', () => {
    assertGQLEqual(
      gt.query(
        {
          users: [
            {
              id: t.Int
            }
          ]
        },
        { users: { status: t.String, limit: t.nullable.Int } },
        'getUsers'
      ),
      gql`
        query getUsers($status: String!, $limit: Int) {
          users(status: $status, limit: $limit) {
            id
          }
        }
      `
    )
  })

  it('render enum', () => {
    enum UserType {
      'Student',
      'Teacher'
    }

    const queryObj = {
      user: {
        id: t.Int,
        type: t.enum(UserType)
      }
    }
    // just type check

    assertGQLEqual(
      gt.query(queryObj),
      gql`
        query {
          user {
            id
            type
          }
        }
      `
    )
  })

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
  //   query(queryObject, 'getUsers')

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

  it('render custom scalar property', () => {
    interface CustomField {
      id: number
    }

    const queryObject = {
      users: {
        id: t.Int,
        customField: t.custom<CustomField>()
      }
    }
    const actual = gt.query(queryObject)

    assertGQLEqual(
      actual,
      gql`
        query {
          users {
            id
            customField
          }
        }
      `
    )
  })
})
