import { graphtype, t, $ } from './index'
import { nullable } from './types'
// import { GraphQLData } from './index'
import { gql } from './test-utils'

describe('graphqlify', () => {
  let query: any
  beforeEach(function() {
    query = graphtype()
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

    const typeQuery = graphtype<
      typeof q,
      {
        user: { id: number; name: string; bankAccount: { accId: number } }
      }
    >()

    const actual = typeQuery(
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
            id: t.Int,
            name: t.String,
            bankAccount: {
              id: t.Int,
              branch: t.String
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
        id: t.Int
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
              id: t.Int
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
        id: t.Int
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
        id: t.Int
      },
      bankAccount: {
        id: t.Int
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
            id: t.Int
          },
          bankAccount: {
            id: t.Int,
            type: t.nullable.String
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
          type
        }
      }
    `)
  })

  it('render variable param and name it the same', () => {
    expect(
      query(
        {
          user: {
            id: t.Int
          }
        },
        {
          query: 'getUserById',
          params: { user: { id: nullable(t.Int) } }
        }
      )
    ).toEqual(gql`
      query getUserById($id: Int) {
        user(id: $id) {
          id
        }
      }
    `)
  })

  it('render variable params with an alias', () => {
    const fragment = {
      id: t.Int
    }
    // const paramsObject = {
    //   userId: types.number,
    //   bankAccountId: types.number
    // }

    expect(
      query(
        {
          user: fragment,
          bankAccount: fragment
        },
        {
          query: 'getUserAndBankAccount',
          params: {
            user: { id: $('userId', nullable(t.Int)) },
            bankAccount: {
              id: nullable(t.Int)
            }
          }
        }
      )
    ).toEqual(gql`
      query getUserAndBankAccount($userId: Int, $id: Int) {
        user(id: $userId) {
          id
        }
        bankAccount(id: $id) {
          id
        }
      }
    `)
  })

  it('render mutation', () => {
    expect(
      query(
        {
          updateUser: {
            id: t.Int
          }
        },
        {
          mutation: 'updateUser',
          params: { updateUser: { name: t.String } }
        }
      )
    ).toEqual(gql`
      mutation updateUser($name: String!) {
        updateUser(name: $name) {
          id
        }
      }
    `)
  })

  it('render mutation with custom type name', () => {
    expect(
      query(
        {
          updateUser: {
            id: t.Int
          }
        },
        {
          mutation: 'updateUser',
          params: { updateUser: { input: t.raw('UserInput') } }
        }
      )
    ).toEqual(gql`
      mutation updateUser($input: UserInput) {
        updateUser(input: $input) {
          id
        }
      }
    `)
  })

  it('render nullable field', () => {
    expect(
      query(
        {
          user: nullable({
            id: t.Int
          })
        },
        { query: 'getUser' }
      )
    ).toEqual(gql`
      query getUser {
        user {
          id
        }
      }
    `)
  })

  it('render array field', () => {
    expect(
      query(
        {
          users: [
            {
              id: t.Int
            }
          ]
        },
        { query: 'getUsers' }
      )
    ).toEqual(gql`
      query getUsers {
        users {
          id
        }
      }
    `)
  })

  it('render __typename itself', () => {
    // just type check
    // const a: GraphQLData<typeof queryObject> = {
    //   users: {
    //     id: 1,
    //     __typename: 'User',
    //   },
    // }

    expect(
      query({
        users: {
          id: t.Int,
          __typename: t.constant('User')
        }
      })
    ).toEqual(gql`
      query {
        users {
          id
          __typename
        }
      }
    `)
  })

  it('render parameters when array', () => {
    expect(
      query(
        {
          users: [
            {
              id: t.Int
            }
          ]
        },
        {
          query: 'getUsers',
          params: { users: { status: t.String, limit: t.nullable.Int } }
        }
      )
    ).toEqual(gql`
      query getUsers($status: String!, $limit: Int) {
        users(status: $status, limit: $limit) {
          id
        }
      }
    `)
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

    expect(query(queryObj)).toEqual(gql`
      query {
        user {
          id
          type
        }
      }
    `)
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
    const actual = query(queryObject)

    expect(actual).toEqual(gql`
      query {
        users {
          id
          customField
        }
      }
    `)
  })
})
