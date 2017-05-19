import { ApolloClient, createNetworkInterface, IntrospectionFragmentMatcher } from 'react-apollo';

export default function createClient(options = {}) {
    let fragmentMatcher = undefined

    if (options.__schema) {
        fragmentMatcher = new IntrospectionFragmentMatcher({
            introspectionQueryResultData: {
                __schema: options.__schema,
            }
        })
    }

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

    return new ApolloClient({
        networkInterface: networkInterface,
        fragmentMatcher
    });
}
