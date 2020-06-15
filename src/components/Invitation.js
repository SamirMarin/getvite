import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './css/Invitation.css';

class Invitation extends Component {
  render() {
    return (
      <div 
        className="Invitation-imgbackground"
        style={{backgroundImage: `url(${this.props.invitation.photo})`}}
      >
        <div className="Invitation-text">
        <h1>{ this.props.invitation.header }</h1>
        <div>{ this.props.invitation.body }</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ invitation }, props ) {
  return {
    invitation: invitation
  }
}

export default connect(mapStateToProps)(Invitation);

