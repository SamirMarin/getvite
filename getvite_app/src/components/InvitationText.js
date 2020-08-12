import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './css/InvitationText.css';
import { 
  addInvitationText, 
  addInvitationTextText, 
  addInvitationTextPosition,
  addInvitationTextFontSize,
  deleteInvitationTextbox,
} from '../actions'
import { GoArrowDown, GoArrowUp, GoEye, GoEyeClosed } from 'react-icons/go'
import { MdDeleteForever } from 'react-icons/md'

class InvitationText extends Component {
  state = {
    fontValue: this.props.text ? this.props.text.fontSize : '#',
    previewText: false
  }
  handleChangeText(id, text) {
    this.props.addInvitationTextText( { textId: id, invitationText: text} )
  }
  handleChangePostion(id, position) {
    this.props.addInvitationTextPosition( { textId: id, invitationTextPosition: position  } )
  }
  handleChangeFontSize(id, event){
    const fontValue = event.target.value
    this.setState(state => ({
      ...state,
      fontValue: fontValue
    }))
    if (event.key == 'Enter'){
      this.props.addInvitationTextFontSize( { textId: id, invitationTextFontSize: event.target.value  } )
    }
  }
  handlePreviewTextBox(){
    this.setState(state => ({
      ...state,
      previewText: !this.state.previewText
    }))
  }
  handleDeleteItem(id){
    var doubleCheck = true

    if (doubleCheck){
      this.props.deleteInvitationTextbox( { textId: id } )
    }
  }
  render() {
    return (
      <div className="Invitation-text"
          style={{top: `${this.props.text.position}%`}}
      >
      { this.props.previewTextGlobal | this.state.previewText ? 
        <div className="InvitationText-container">
          <div
            className="Invitation-textarea-body"
            style={{fontSize: `${this.props.text.fontSize}px`}}
          >
            { this.props.text.text }
          </div>
            { !this.props.previewTextGlobal && 
           <GoEyeClosed
            onClick={(event => this.handlePreviewTextBox())}
          />
            }
        </div>
          :
        <div>
          <GoArrowUp
           onClick={(event) => this.handleChangePostion(this.props.textId, this.props.text.position - 1 )}
          />
          <div className="InvitationText-container">
            <div>
              <MdDeleteForever
                onClick={(event => this.handleDeleteItem(this.props.textId))}
              />
            </div>
            <textarea 
              value={ this.props.text.text }
              className="EditInvitation-textarea-body"
              style={{fontSize: `${this.props.text.fontSize}px`}}
              onChange={(event) => this.handleChangeText(this.props.textId, event.target.value)}
            />
          <div>
            <GoEye
              onClick={(event => this.handlePreviewTextBox())}
            />
            <input 
              value={ this.state.fontValue } 
              className="EditInvitation-input-body"
              onKeyDown={(event => this.handleChangeFontSize(this.props.textId, event))}
              onChange={(event => this.handleChangeFontSize(this.props.textId, event))}
            />
          </div>
          </div>
          <GoArrowDown
            onClick={(event) => this.handleChangePostion(this.props.textId, this.props.text.position + 1 )}
          />
        </div>
      }
      </div>
    )
  }
}

function mapStateToProps({ invitation }, props ){
  return {
    text: props.textId ? invitation.text[props.textId] : {text: 'This is your text', position: 30}
  }
}

function mapDispatchToProps( dispatch ){
  return {
    addInvitationText: (data) => dispatch(addInvitationText(data)),
    addInvitationTextText: (data) => dispatch(addInvitationTextText(data)),
    addInvitationTextPosition: (data) => dispatch(addInvitationTextPosition(data)),
    addInvitationTextFontSize: (data) => dispatch(addInvitationTextFontSize(data)),
    deleteInvitationTextbox: (data) => dispatch(deleteInvitationTextbox(data)),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(InvitationText);
