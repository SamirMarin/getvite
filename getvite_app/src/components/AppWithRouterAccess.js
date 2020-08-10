import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import App from './App';
import Login from './Login';

class AppWithRouterAccess extends Component {
  constructor(props) {
    super(props);
  }
  onAuthRequired() {
    this.props.history.push('/login');
  }

  render() {
    return (
      <Security issuer={`https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`}
                clientId={process.env.REACT_APP_OKTA_CLIENTID}
                redirectUri={window.location.origin + '/implicit/callback'}
                onAuthRequired={(() => this.onAuthRequired())}
                pkce={true} >
        <Route path='/' exact={true} component={App} />
        <Route path='/login' render={() => <Login issuer={`https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`} />} />
        <Route path='/implicit/callback' component={LoginCallback} />
      </Security>
    );
  }
};
export default withRouter(AppWithRouterAccess)
