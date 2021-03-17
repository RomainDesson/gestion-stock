import {Action} from "../action.helper";

export const LOGIN = "LOGIN"
export const LOGIN_EXP = "LOGIN_EXP"

export const login = (token: string): Action => {
    return {
        type: LOGIN,
        payload: {
            token
        }
    }
}