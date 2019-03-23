import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import auth from '../reducers/auth'
import user from '../reducers/user'

import logger from '../middlewares/logger'

const middlwares = applyMiddleware(thunk, logger)
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancers = compose(middlwares, reduxDevtools)

const reducers = combineReducers({ auth, user })

export default createStore(reducers, undefined, enhancers)
