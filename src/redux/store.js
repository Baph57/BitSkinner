import {applyMiddleware, createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reduxer from "./reduxer/reduxer.js"

// export const SAMPLE_ACTION = 'SAMPLE_ACTION'
// export const sampleAction = () => ({
//     type: SAMPLE_ACTION,
// })

// const initState = {
//     sampleKey: {
//         updated: false
//     }
// }
const reducer = combineReducers({reduxer})
// const reducer = (state = initState, action) => {
//     switch(action.type) {
//         case SAMPLE_ACTION:
//             return {
//                 ...state,
//                 sampleKey: {
//                     ...state.sampleKey,
//                     updated: !state.sampleKey.updated
//                 }
//             }
//         default:
//             return state
//     }
// }

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
))
export default store