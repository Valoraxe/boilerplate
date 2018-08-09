import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import authReducer from '../reducers/authentication'

const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  authentication: authReducer
})

const store = createStore(rootReducer, reduxTools(applyMiddleware(thunk)))

export default store
