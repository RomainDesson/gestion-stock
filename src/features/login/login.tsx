import axios from "axios";
import {LoginFormContainer} from "./login-form.container";


export const Login = () => {
        const getUserToken = async (data: any) => {
            try {
                const userToken = await axios.post('http://localhost:1337/auth/local', data)
                console.log(userToken.data.jwt)
                localStorage.setItem('token', userToken.data.jwt)
            } catch (e){
                console.log(e)
            }
            console.log(data)
        }
    return <LoginFormContainer getUserToken={getUserToken}/>

}