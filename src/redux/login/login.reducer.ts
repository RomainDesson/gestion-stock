import { Action } from '../action.helper'
import {LOGIN, LOGOUT} from "./login.action";

interface IProps {
    isLogged: boolean
}

export const initialState: IProps = {
    isLogged: localStorage.getItem('token') !== null
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
        case LOGOUT: {
            localStorage.removeItem('token')
            return {
                ...state,
                isLogged: false
            }
        }
        default:
            return state
    }
}