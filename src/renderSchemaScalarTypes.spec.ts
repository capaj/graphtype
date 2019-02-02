// import { typeMapGenerator } from './type-map-generator'
import { buildClientSchema } from 'graphql'
import intro from '../fixtures/github-intorspection.json'
import { renderSchemaScalarTypes } from './renderSchemaScalarTypes'
import { types } from './types'

describe('renderSchemaTypes', function() {
  it('should render', async () => {
    const schema = buildClientSchema(intro.data)
    expect(
      renderSchemaScalarTypes(schema, { URI: types.String, HTML: types.String })
    ).toMatchSnapshot()
  })
})
