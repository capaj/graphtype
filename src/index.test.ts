import { graphtype, types, $ } from './index'
import { nullable } from './types'
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

  it('render variable param and name it the same', () => {
    expect(
      query(
        {
          user: {
            id: types.number
          }
        },
        {
          query: 'getUserById',
          params: { user: { id: nullable(types.number) } }
        }
      )
    ).toEqual(gql`
      query getUserById($id: Number) {
        user(id: $id) {
          id
        }
      }
    `)
  })

  it('render variable params with an alias', () => {
    const fragment = {
      id: types.number
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
            user: { id: $('userId', nullable(types.number)) },
            bankAccount: {
              id: nullable(types.number)
            }
          }
        }
      )
    ).toEqual(gql`
      query getUserAndBankAccount($userId: Number, $id: Number) {
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
            id: types.number
          }
        },
        {
          mutation: 'updateUser',
          params: { updateUser: { name: types.string } }
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
            id: types.number
          }
        },
        {
          mutation: 'updateUser',
          params: { updateUser: { input: types.raw('UserInput') } }
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
            id: types.number
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
              id: types.number
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
          id: types.number,
          __typename: types.constant('User')
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
              id: types.number
            }
          ]
        },
        { query: 'getUsers', params: { users: { status: types.string } } }
      )
    ).toEqual(gql`
      query getUsers($status: String!) {
        users(status: $status) {
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

    // just type check
    // const a: GraphQLData<typeof queryObject> = {
    //   user: {
    //     id: 1,
    //     type: 'foo',
    //   },
    // }

    expect(
      query({
        user: {
          id: types.number,
          type: types.oneOf(UserType)
        }
      })
    ).toEqual(gql`
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
