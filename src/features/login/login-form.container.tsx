import {useState} from "react";
import {LoginFormView} from "./login-form.view";
import {useHistory} from 'react-router-dom'

interface IProps {
    getUserToken: (data: any) => Promise<void>
}

export const LoginFormContainer = ({getUserToken}: IProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const data = {
        identifier: email,
        password: password
    }
    const checkToken = (token?: any) => {
        if (token) {
            history.push('/home')
        }
    }
    const pickEmail = (e: any) => {
        setEmail(e.target.value)
    }
    const pickPassword = (e: any) => {
        setPassword(e.target.value)
    }
    const _login = async () => {
        await getUserToken(data)
        const token = localStorage.getItem('token')
        await checkToken(token)
    }
    return <LoginFormView pickEmail={pickEmail} pickPassword={pickPassword} _login={_login}/>
}