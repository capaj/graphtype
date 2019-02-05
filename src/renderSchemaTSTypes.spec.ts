import { renderSchemaTSTypes } from './renderSchemaTSTypes'
// import { typeMapGenerator } from './type-map-generator'
import { buildClientSchema } from 'graphql'
import intro from '../fixtures/github-intorspection.json'
import { schemaToTemplateContext } from 'graphql-codegen-core'

import { types } from './types'

describe('renderSchemaTypes', function() {
  it('should render', async () => {
    const schema = buildClientSchema(intro.data)
    const context = schemaToTemplateContext(schema)

    const githubTypes = renderSchemaTSTypes(context, {
      URI: types.String,
      HTML: types.String
    })
    expect(githubTypes).toMatchSnapshot()
  })
})
