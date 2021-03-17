import {combineReducers} from "redux";
import {loginReducer} from "./login/login.reducer";

export const reducer = combineReducers(
  {
    loginReducer
  }
)