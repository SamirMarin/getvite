import { combineReducers } from 'redux'
import {
  ADD_INVITATION,
  ADD_INVITATION_PHOTO,
  ADD_INVITATION_USER,
  ADD_INVITATION_TEXT,
  ADD_INVITATION_TEXT_TEXT,
  ADD_INVITATION_TEXT_POSITION,
  ADD_INVITATION_TEXT_FONTSIZE,
  DELETE_INVITATION_TEXTBOX,
} from '../actions'

function invitation (state={}, action) {
  const { textId, invitationText, invitationTextPosition, invitationTextFontSize } = action
  switch (action.type) {
    case ADD_INVITATION: 
      const { invitation } = action
      return {
        ...state,
        'photo': invitation.photo
      }
    case ADD_INVITATION_PHOTO:
      const { invitationPhoto } = action
      return {
        ...state,
        'photo': invitationPhoto
      }
    case ADD_INVITATION_USER:
      const { username, isAdmin } = action
      return {
        ...state,
        'user': {
          username: username,
          isAdmin: isAdmin
        }
      }
    case ADD_INVITATION_TEXT:
      return {
        ...state,
        'text': {
          ...state['text'],
          [textId]: {
            'text': invitationText,
            position: invitationTextPosition,
            fontSize: invitationTextFontSize,
            isDeleted: false,
            textId: textId
          }
        }
      }
      case ADD_INVITATION_TEXT_TEXT:
      return {
        ...state,
        'text': {
          ...state['text'],
          [textId]: {
            ...state['text'][textId],
            'text': invitationText
          }
        }
      }
      case ADD_INVITATION_TEXT_POSITION:
      return {
        ...state,
        'text': {
          ...state['text'],
          [textId]: {
            ...state['text'][textId],
            position: invitationTextPosition
          }
        }
      }
      case ADD_INVITATION_TEXT_FONTSIZE:
      return {
        ...state,
        'text': {
          ...state['text'],
          [textId]: {
            ...state['text'][textId],
            fontSize: invitationTextFontSize
          }
        }
      }
    case DELETE_INVITATION_TEXTBOX:
      const { isDeleted } = action
      return {
        ...state,
        'text': {
          ...state['text'],
          [textId]:{
            ...state['text'][textId],
            isDeleted: isDeleted
          }
        }
      }
    default:
      return {
        'header': '',
        'body': '',
        'photo': ''
      }
  }
}


export default combineReducers({
  invitation,
})

