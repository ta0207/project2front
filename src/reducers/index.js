import loggedReducer from "./islogged";
import {combineReducers} from 'redux';
import datesReducer from "./dates";
import userReducer from "../redux/user"

const allReducers = combineReducers({
    loggedReducer,
    datesReducer,
    user: userReducer
})

export default allReducers;