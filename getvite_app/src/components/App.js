import React, { Component } from 'react';
import Invitation from './Invitation'
import './css/App.css';
import { Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
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
            </div>
         </header>
          <Switch>
             <Route exact path="/" component={Invitation}/>
          </Switch>
      </div>
    );
  }
}


export default App;