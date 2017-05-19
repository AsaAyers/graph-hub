import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import './App.css';

const MyQuery = gql(["query Foo { Xviewer { login } }"])


class App extends Component {
    render() {
        return (
            <pre>{JSON.stringify(this.props, null, 2)}</pre>
        );
    }
}

export default graphql(MyQuery)(App)
