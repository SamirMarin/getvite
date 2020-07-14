import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { addInvitation } from './actions'
import { BrowserRouter } from 'react-router-dom'
import * as Api from './utils/api'


const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

const store = createStore(
  reducer, 
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
)

const random_web_photo = "https://i.pinimg.com/originals/e3/de/50/e3de50b67837b2d583719ee4655075ad.jpg"
const computer_photo = "/static/media/seattlekkitasamir.17abd868.jpg"
const user = "nair.nikkita@gmail.com"
const user2 = "marin.samir@gmail.com"
Api.getInvitation(user)
  .then((invitation) => {
    if(invitation.user == user){
      invitation['photo'] = invitation.photo
      store.dispatch(
        addInvitation(
          {
            invitation
          }))
    } else {
      throw "user does not match"
    }
  })
  .catch((error) => console.log(error))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter><App /></BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
