import * as Api from './api'
import { addInvitation, addInvitationText, addInvitationUser } from '../actions'

export const fetchInvitation = (admin_user) => dispatch => (
  Api
  .getInvitation(admin_user)
  .then((invitation) => {
    if(invitation.user == admin_user){
      dispatch(addInvitation({ invitation }))
      dispatch(addInvitationUser({ username: admin_user, isAdmin: true }))
      invitation.text.forEach(function(text_attributes){
        dispatch(addInvitationText(
          {
            textId: text_attributes.textId,
            invitationText: text_attributes.text,
            invitationTextPosition: text_attributes.position,
            invitationTextFontSize: text_attributes.fontSize
          }
        )) 
      })
    }
  })
  .catch((error) => console.log(error))
)
