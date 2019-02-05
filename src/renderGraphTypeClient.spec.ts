import { renderGraphTypeClient } from './renderGraphTypeClient'
import fs from 'fs'

import intro from '../fixtures/github-intorspection.json'
import { buildClientSchema } from 'graphql'
import { types } from './types'

describe('renderGraphTypeClient', function() {
  it('should render', async () => {
    const schema = buildClientSchema(intro.data)

    fs.writeFileSync(
      './fixtures/github.ts',
      renderGraphTypeClient({
        schema,
        extraScalars: {
          URI: types.String,
          HTML: types.String
        },
        clientName: 'github'
      })
    )
  })
})
