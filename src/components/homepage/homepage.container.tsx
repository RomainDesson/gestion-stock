import {HomepageView} from './homepage.view';
import {useDispatch} from "react-redux";
import {logout} from "../../redux/login/login.action";
import { useHistory } from "react-router-dom";

export const HomepageContainer = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const _logout = () => {
        dispatch(logout())
        history.push('/')
    }
    return <HomepageView _logout={_logout} />
}