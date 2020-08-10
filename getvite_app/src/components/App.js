import React, { Component } from 'react';
import Invitation from './Invitation'
import LoginForm from './LoginForm'
import './css/App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { withOktaAuth } from '@okta/okta-react';
import { fetchInvitation } from '../utils/apiController'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.authService.getUser()
      .then(user => {
        this.props.dispatch(fetchInvitation(user.preferred_username))
      })
  }
  render() {
    if (this.props.authState.isPending) {
      return <div>Loading...</div>;
    }
    const button = this.props.authState.isAuthenticated ?
      <button onClick={() => {this.props.authService.logout()}}>Logout</button> :
      <button onClick={() => {this.props.authService.login()}}>Login</button>;

    return (
      <div className="App">
        <header className="App-header">
           <div className="App-navigators-container">
             <div className="App-navigators-item">
              <Link
                to="/"
                className="App-link"
                > home </Link>
              </div >
             <div className="App-navigators-item"> info </div>
             <div className="App-navigators-item"> rsvp </div>
               {button}
            </div>
         </header>
            { this.props.authState.isAuthenticated ?
          <Switch>
             <Route exact path="/" component={Invitation}/>
          </Switch>
              :
          <div>
            <Redirect to={{ pathname: '/login' }}/> :
          </div>
            }
      </div>
    );
  }
}


export default connect()(withOktaAuth(App));
