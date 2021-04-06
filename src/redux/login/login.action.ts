import { Action } from '../action.helper'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (token: string): Action => {
  return {
    type: LOGIN,
    payload: {
      token
    }
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}
