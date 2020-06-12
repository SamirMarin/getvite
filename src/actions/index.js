export const ADD_INVITATION_HEADER = 'ADD_INVITATION_HEADER'
export const ADD_INVITATION_BODY = 'ADD_INVITATION_BODY'
export const ADD_INVITATION_PHOTO = 'ADD_INVITATION_PHOTO'


export function addInvitationHeader ({ invitationHeader }) {
  return {
    type: ADD_INVITATION_HEADER,
    invitationHeader,
  }
}

export function addInvitationBody ({ invitationBody }) {
  return {
    type: ADD_INVITATION_BODY,
    invitationBody,
  }
}

export function addInvitationPhote ({ invitationPhoto }) {
  return {
    type: ADD_INVITATION_PHOTO,
    invitationPhoto,
  }
}

