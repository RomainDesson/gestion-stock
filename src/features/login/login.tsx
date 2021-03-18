import axios from "axios";
import {LoginFormContainer} from "./login-form.container";
import {useDispatch} from "react-redux";
import {login} from "../../redux/login/login.action";
import {store} from "../../store";
import {useHistory} from 'react-router-dom'

export const Login = () => {
    const state = store.getState()
    const auth = state.loginReducer.isLogged
    const dispatch = useDispatch()
    const history = useHistory()
    const getUserToken = async (data: any) => {
        try {
            const userToken = await axios.post('http://localhost:1337/auth/local', data)
            dispatch(login(userToken.data.jwt))
        } catch (e) {
            console.log(e)
        }
    }
    return (
      <>
            <LoginFormContainer getUserToken={getUserToken}/>
      </>
    )

}