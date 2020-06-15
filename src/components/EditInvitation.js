import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './css/EditInvitation.css';
import { 
  addInvitationHeader, 
  addInvitationBody, 
  addInvitationPhoto 
} from '../actions'

class EditInvitation extends Component {

  handleChangeHeader(value){
    this.props.addInvitationHeader({ invitationHeader: value })
  }
  handleChangeBody(value) {
    this.props.addInvitationBody({ invitationBody: value })
  }
  render() {
    return (
      <div 
        className="Invitation-imgbackground"
        style={{backgroundImage: `url(${this.props.photo})`}}
      >
        <div className="Invitation-text">
          <textarea 
            value={ this.props.header }
            className="EditInvitation-textarea-header"
            onChange={(event) => this.handleChangeHeader(event.target.value)}
          />
          <textarea 
            value={ this.props.body }
            className="EditInvitation-textarea-body"
            onChange={(event) => this.handleChangeBody(event.target.value)}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ invitation }){
  return {
    header: invitation.header,
    body: invitation.body,
    photo: invitation.photo,
  }
}

function mapDispatchToProps( dispatch ){
  return {
    addInvitationHeader: (data) => dispatch(addInvitationHeader(data)),
    addInvitationBody: (data) => dispatch(addInvitationBody(data)),
    addInvitationPhoto: (data) => dispatch(addInvitationPhoto(data)),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(EditInvitation);
