
// import { ON_CLICK_CONSOLE_LOG } from "../Axions/onclick";
// import { RECEIVE_WEATHER } from "../Axions/receiveweather";
// import {CALENDAR} from "../Axions/calendar"
// import {NEW_TABLE_ROW} from "../Axions/newTableRow"
import {SEND_SEARCH_PARAMS} from "../axions/sendSearchParams"

// let initialState = {}
export default function reduxer (state = {}, action){
    switch (action.type){
        case SEND_SEARCH_PARAMS:
            return Object.assign({}, state, {
                data: action.info
            })

            // return state.setState((action) => 
            // ({ ...reduxer, reduxer: action.info}))



            //return state.data = action.info //use methods not assignment ops
        // case ON_CLICK_CONSOLE_LOG :
        // return console.log(action.log)
        // case RECEIVE_WEATHER:
        // return action.weather.map(weather => ({...weather}))
        // case CALENDAR:
        // return state.map(x=>{[...x], x.objToShip = action.objToShip})
        // case NEW_TABLE_ROW:
        // return action.tableObj
        default:
        return state
    }
}