# redux-wasp-apollo

> Provides integration between [redux-wasp](https://github.com/BlackWaspTech/redux-wasp) and [apollo-link-state](https://github.com/apollographql/apollo-link).

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

---

# Usage

Pass your Apollo Client down as a prop. Pass props into the Wasp-Redux functions.

# Example

### index.js

```js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom';
import App from './components/app';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:3000/graphql'}),
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App client={client} />
    </Provider>
  </ApolloProvider>, document.getElementById('root')
)
```

### app.js

```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as queries from './queries/queries';


// Wasp Links
import WaspLinkMutate from 'WaspReduxApolloLinkMutate';
import WaspLinkQuery from 'WaspReduxApolloQuery';

// Wasp Fetch
import WaspFetch from 'WaspFetch';

let API = 'http://localhost:3000/graphql';

const mapStateToProps = state => {
  return {
    user: state
  }
}
class App extends Component {
  constructor(props) {
    super(props);
  }


  getUsers(e, props) {
    e.preventDefault();
    // Wasp Query usage
    // Passing in props with Client passed down, as well as, the query to be used
    WaspLinkQuery(props, queries.getAllUsers)
    // Get information with WaspFetch
    WaspFetch(API, queries.getAllUsersWaspFetch)
  }
  render() {
    return (
      <div>
          <button onClick={(e) => this.getUsers(e, this.props)}>Get Users</button>
      </div>
    )
  }
}


export default connect(mapStateToProps)(App);
```

## Code of Conduct

Read our Code of Conduct [here](CODE-OF-CONDUCT.md).

## License

Open Sourced under the [MIT License](LICENSE).
