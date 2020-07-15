import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './css/Invitation.css';
import { addInvitationText } from '../actions'
import InvitationText from './InvitationText';
import { RiAddBoxLine, RiSaveLine, RiEditBoxLine } from 'react-icons/ri'
import * as Api from '../utils/api'

class Invitation extends Component {
  state = {
    edit: false
  }
  handleMakeNewText(id, position, fontSize) {
    this.props.addInvitationText({ textId: id, invitationText: 'new text', invitationTextPosition: position, invitationTextFontSize: fontSize })
  }
  handleEditInvitation() {
    const newEditState = !this.state.edit
    this.setState(state => ({
      ...this.state,
      edit: newEditState
    }))
  }
  render() {
    return (
      <div 
        className="Invitation-imgbackground"
        style={{backgroundImage: `url(${this.props.photo})`}}
      >
      <div className="Invitation-maketext">
        {this.state.edit ? 
           <div>
             <div
             > 
             <RiSaveLine
               className="Invitation-addbox"
               onClick={(event => this.handleEditInvitation())}
              />
             </div>
            <div
             > 
             <RiAddBoxLine
               className="Invitation-addbox"
               onClick={(event => this.handleMakeNewText(this.props.numberText + 1, 5+12*this.props.numberText, "20"))}
              />
            </div>
           </div>
            :
            <div
            >
              <RiEditBoxLine
               className="Invitation-addbox"
                onClick={(event => this.handleEditInvitation())}
              />
            </div>
        }
      </div>
        <div>
          <ol className="Invitation-orderlist">
          {this.props.text.map((textId) => (
            <li key={textId}>
              <div>
                <InvitationText
                  textId={textId}
                  previewTextGlobal={!this.state.edit}
                />
              </div>
            </li>
          ))}
              </ol>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ invitation }, props ) {
  return {
    photo: invitation.photo,
    text: invitation.text ? Object.keys(invitation.text) : [],
    numberText: invitation.text ? Object.keys(invitation.text).length : 0,
  }
}

function mapDispatchToProps( dispatch ){
  return {
    addInvitationText: (data) => dispatch(addInvitationText(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invitation);

