import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from './reducers'
import logger from 'redux-logger'

const middleware = applyMiddleware(promise(), thunk, logger)

export default createStore(reducer, middleware)
