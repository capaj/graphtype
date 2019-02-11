import React from 'react'
import { Graphtype } from '.'
import { gql } from './test-utils'

describe.skip('compileToGql', function() {
  let gt: any
  beforeEach(function() {
    gt = new Graphtype()
  })

  it('renders using a functional component in the query', () => {
    const RenderPet = ({ pet: { name } }: { pet: { name: string } }) => {
      console.log('pet')

      return <div>he/she has a pet {name}. </div>
    }
    function applyGeneric<T>(func: (arg: T) => any) {
      return ({} as any) as T
    }
    type PersonWithPets = {
      name: string
      age: number
      pets: Array<{ name: string }>
      favouritePet: { name: string; nickname: string }
    }
    const RenderPerson = ({
      name,
      age,
      pets,
      favouritePet: { name: petName, nickname }
    }: PersonWithPets) => {
      console.log('person')
      return (
        <div>
          {name} is {age} yeas old.
          {pets.map((pet) => {
            return <RenderPet pet={pet} />
          })}
        </div>
      )
    }

    const rp = applyGeneric<PersonWithPets>(
      ({ favouritePet: { name }, pets }) => {}
    )

    const queryObject = {
      users: RenderPerson
    }
    console.log('RenderPerson: ', RenderPerson)
    const str = RenderPerson.toString()
    var args = /\(\s*([^)]+?)\s*\)/.exec(str)
    console.log('args: ', args)
    if (args[1]) {
      args = args[0].replace(/\(|\)|\s/g, '').replace(/\:{/g, '{')
    }
    console.log('args: ' + JSON.stringify(args))
    const actual = gt.query(queryObject)

    expect(actual).toEqual(gql`
      query {
        users {
          id
          customField
        }
      }
    `)
  })

  it('should throw on ArrayPattern', () => {})
})
