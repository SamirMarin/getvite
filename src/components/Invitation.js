import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './css/Invitation.css';

class Invitation extends Component {
  render() {
    return (
      <div className="Invitation-imgbackground">
        <div className="Invitation-text">
        <h1>You are invited</h1>
        <div> to Nikkita's and Samir's wedding</div>
        </div>
      </div>
    )
  }
}

export default Invitation
