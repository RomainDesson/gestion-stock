import {useState} from "react";
import {LoginFormView} from "./login-form.view";

interface IProps {
    getUserToken: (data: any) => Promise<void>
}

export const LoginFormContainer = ({getUserToken}: IProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const data = {
        identifier: email,
        password: password
    }
    const pickEmail = (e: any) => {
        setEmail(e.target.value)
    }
    const pickPassword = (e: any) => {
        setPassword(e.target.value)
    }
    const _login = async () => {
        await getUserToken(data)
    }
    return <LoginFormView pickEmail={pickEmail} pickPassword={pickPassword} _login={_login}/>
}