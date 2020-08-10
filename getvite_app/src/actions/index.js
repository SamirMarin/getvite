export const ADD_INVITATION = 'ADD_INVITATION'
export const ADD_INVITATION_PHOTO = 'ADD_INVITATION_PHOTO'
export const ADD_INVITATION_USER = 'ADD_INVITATION_USER'
export const ADD_INVITATION_TEXT = 'ADD_INVITATION_TEXT'
export const ADD_INVITATION_TEXT_TEXT = 'ADD_INVITATION_TEXT_TEXT'
export const ADD_INVITATION_TEXT_POSITION = 'ADD_INVITATION_TEXT_POSITION'
export const ADD_INVITATION_TEXT_FONTSIZE = 'ADD_INVITATION_TEXT_FONTSIZE'


export function addInvitation ({ invitation }) {
  return {
    type: ADD_INVITATION,
    invitation,
  }
}

export function addInvitationPhoto ({ invitationPhoto }) {
  return {
    type: ADD_INVITATION_PHOTO,
    invitationPhoto,
  }
}

export function addInvitationUser ({ username, isAdmin }) {
  return {
    type: ADD_INVITATION_USER,
    username,
    isAdmin,
  }
}

export function addInvitationText ( { textId, invitationText, invitationTextPosition, invitationTextFontSize } ) {
  return {
    type: ADD_INVITATION_TEXT,
    textId,
    invitationText,
    invitationTextPosition,
    invitationTextFontSize,
  }
}

export function addInvitationTextText ({ textId, invitationText }) {
  return {
    type: ADD_INVITATION_TEXT_TEXT,
    textId,
    invitationText,
  }
}
export function addInvitationTextPosition ({ textId, invitationTextPosition }) {
  return {
    type: ADD_INVITATION_TEXT_POSITION,
    textId,
    invitationTextPosition,
  }
}
export function addInvitationTextFontSize ({ textId, invitationTextFontSize }) {
  return {
    type: ADD_INVITATION_TEXT_FONTSIZE,
    textId,
    invitationTextFontSize,
  }
}


