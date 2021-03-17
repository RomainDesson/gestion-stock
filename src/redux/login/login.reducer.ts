import { Action } from '../action.helper'
import {LOGIN} from "./login.action";

export const initialState = {
    isLogged: false
}


export const loginReducer = (
  state = initialState,
  { type, payload}: Action
) => {
    switch(type) {
        case LOGIN: {
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                isLogged: true
            }
        }
    } return state
}