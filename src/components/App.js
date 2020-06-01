import React, { Component } from 'react';
import './css/App.css';
import { Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <Link
              to="/"
              className="App-link"
            >Getiv</Link>
            </h1>
         </header>
      </div>
    );
  }
}


export default App;
