const api = "http://localhost:5000/api"
let token = localStorage.token

const headers = {
  'Accept': 'application/json',
}


export const getInvitation = (admin_user) =>
  fetch(`${api}/invitation/${admin_user}`, { headers })
    .then(res => res.json())
