require('es6-promise').polyfill();
require('isomorphic-fetch');
import fs from 'fs'
import path from 'path'
import { gql } from 'react-apollo';

import createClient from './apollo-client'

export async function getSchema() {
    const client = createClient()

    const tmp = await client.query({
        query: gql`
        query GetSchema {
            __schema {
                types {
                    kind
                    name
                    possibleTypes {
                        name
                    }
                }
            }
        }
        `
    })

    return tmp.data
}

async function main() {
    const schema = await getSchema()
    const filename = path.resolve(__dirname, 'schema.json')
    const data = JSON.stringify(schema, null, 2)

    await new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
            if (err) return reject(err)
            resolve()
        })
    })
}

main()
