import { combineReducers } from 'redux'
import {
  ADD_INVITATION_HEADER,
  ADD_INVITATION_BODY,
  ADD_INVITATION_PHOTO,
} from '../actions'

function invitation (state={}, action) {
  switch (action.type) {
    case ADD_INVITATION_HEADER:
      const { invitationHeader } = action
      return {
        ...state,
        'header': invitationHeader
      }
    case ADD_INVITATION_BODY:
      const { invitationBody } = action
      return {
        ...state,
        'body': invitationBody
      }
    case ADD_INVITATION_PHOTO:
      const { invitationPhoto } = action
      return {
        ...state,
        'photo': invitationPhoto
      }
    default:
      return state
  }
}

export default combineReducers({
  invitation,
})

