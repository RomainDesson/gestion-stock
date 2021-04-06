import {useState} from "react";
import {LoginFormView} from "./login-form.view";
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import axios from "axios";
import {login, logout} from "../../redux/login/login.action";
import {store} from "../../store";
import {HomepageContainer} from "../../components/homepage/homepage.container";

export const LoginFormContainer = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [wrongInformations, setWrongInformations] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const state = store.getState()
    const auth = state.loginReducer.isLogged
    const data = {
        identifier: email,
        password: password
    }
    const getUserToken = async (data: any) => {
        try {
            const userToken = await axios.post('http://localhost:1337/auth/local', data)
            dispatch(login(userToken.data.jwt))
        } catch (e) {
            console.log(e)
            dispatch(logout())
        }
    }
    const pickEmail = (e: any) => {
        setEmail(e.target.value)
    }
    const pickPassword = (e: any) => {
        setPassword(e.target.value)
    }
    const _login = () => {
        setIsLoading(true)
        getUserToken(data)
        setTimeout(() => {
            const token = localStorage.getItem('token')
            if (token !== null) {
                history.push('/home')
                console.log('ok')
            } else {
                setWrongInformations(true)
            }
            setIsLoading(false)
        }, 1000)
    }

    return (
        <>
            {auth
             ? <HomepageContainer />
             : <LoginFormView pickEmail={pickEmail} pickPassword={pickPassword}
                              _login={_login} isLoading={isLoading} wrongInformations={wrongInformations}/>}
         </>)
}