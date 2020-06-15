export const ADD_INVITATION = 'ADD_INVITATION'
export const ADD_INVITATION_HEADER = 'ADD_INVITATION_HEADER'
export const ADD_INVITATION_BODY = 'ADD_INVITATION_BODY'
export const ADD_INVITATION_PHOTO = 'ADD_INVITATION_PHOTO'


export function addInvitation ({ invitation }) {
  return {
    type: ADD_INVITATION,
    invitation,
  }
}

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

export function addInvitationPhoto ({ invitationPhoto }) {
  return {
    type: ADD_INVITATION_PHOTO,
    invitationPhoto,
  }
}

