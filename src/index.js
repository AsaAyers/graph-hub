import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import App from './App';
import './index.css';

const networkInterface = createNetworkInterface({
    uri: 'https://api.github.com/graphql',
});
networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {};  // Create the header object if needed.
        }
        const token = process.env.REACT_APP_TOKEN
        req.options.headers.authorization = token ? `Bearer ${token}` : null;
        next();
    }
}]);

const client = global.client = new ApolloClient({
    networkInterface: networkInterface
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
