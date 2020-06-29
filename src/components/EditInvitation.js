import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './css/EditInvitation.css';
import { 
  addInvitationPhoto 
} from '../actions'

class EditInvitation extends Component {

  handleChangeHeader(value){
  }
  handleChangeBody(value) {
  }
  render() {
    return (
      <div 
        className="Invitation-imgbackground"
        style={{backgroundImage: `url(${this.props.photo})`}}
      >
        <div className="Invitation-text">
          <textarea 
            value="eho"
            className="EditInvitation-textarea-header"
            onChange={(event) => this.handleChangeHeader(event.target.value)}
          />
          <textarea 
            value="ello"
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
    photo: invitation.photo,
  }
}

function mapDispatchToProps( dispatch ){
  return {
    addInvitationPhoto: (data) => dispatch(addInvitationPhoto(data)),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(EditInvitation);
