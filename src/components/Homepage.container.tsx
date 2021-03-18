import {HomePageView} from "./HomePage.view";
import {useDispatch} from "react-redux";
import {logout} from "../redux/login/login.action";
import { useHistory } from "react-router-dom";

export const HomePageContainer = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        history.push('/login')
    }
    return <HomePageView handleLogout={handleLogout}/>
}