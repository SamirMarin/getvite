const api = "http://localhost:5000/api"
let token = localStorage.token

const headers = {
  'Accept': 'application/json',
}


export const getInvitation = (admin_user) =>
  fetch(`${api}/invitation/${admin_user}`, { headers })
    .then(res => res.json())

export const saveInvitationText = (texts, admin_user) =>
  fetch(`${api}/invitationTexts/${admin_user}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ texts })
  }).then(res => {
    if(res.ok) {
      return res
    } else {
      return Promise.reject(new Error(res.statusText))
    }
  })
