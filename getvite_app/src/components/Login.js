import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { withOktaAuth } from '@okta/okta-react';

class Login extends Component {
  render() {
    if (this.props.authState.isPending) {
      return <div>Loading...</div>;
    }
    return this.props.authState.isAuthenticated ?
      <Redirect to={{ pathname: '/' }}/> :
      <LoginForm issuer={this.props.issuer} />;
  }
};
export default withOktaAuth(Login)
