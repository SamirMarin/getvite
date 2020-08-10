import React, { Component } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withOktaAuth } from '@okta/okta-react';
import './css/LoginForm.css';
import { fetchInvitation } from '../utils/apiController'
import { connect } from 'react-redux'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      username: '',
      password: ''
    };

    this.oktaAuth = new OktaAuth({ issuer: props.issuer });
  }

  handleSignIn(event) {
    event.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      const sessionToken = res.sessionToken;
      this.setState(
        { sessionToken },
        // sessionToken is a one-use token, so make sure this is only called once
        () => this.props.authService.redirect({sessionToken})
      );
    })
    .catch(err => console.log('Found an error', err));
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  render() {
    if (this.state.sessionToken) {
      // Hide form while sessionToken is converted into id/access tokens
      return null;
    }

    return (
      <div className="LoginForm-main">
        <form 
        >
        <div>
          <label>
          <input
            className="LoginForm-user"
            id="username" type="text"
            value={this.state.username}
            onChange={(event => this.handleUsernameChange(event))}
          />
        </label>
        <label>
          <input
            className="LoginForm-pass"
            id="password" type="password"
            value={this.state.password}
            onChange={(event => this.handlePasswordChange(event))} 
          />
        </label>
          <div
            className="LoginForm-signin"
            onClick={(event => this.handleSignIn(event))}
          >
              signin
          </div>
        </div>
        </form>
      </div>
    );
  }
};
export default connect()(withOktaAuth(LoginForm))
