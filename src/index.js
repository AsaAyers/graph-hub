import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
require('es6-promise').polyfill();
require('isomorphic-fetch');

import createClient from './apollo-client'
import schema from './schema.json'
import App from './App';
import './index.css';

console.log('schema: ', schema)

const client = global.client = createClient({
    __schema: schema.__schema
})



ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
