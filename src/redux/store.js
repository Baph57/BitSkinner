import {applyMiddleware, createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reduxer from "./reduxer/reduxer.js"

const reducer = combineReducers({reduxer})
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
))
export default store