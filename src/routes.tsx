import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { store } from './store'
import {LoginFormContainer} from "./features/login/login-form.container";
import { HomepageContainer } from "./components/homepage/homepage.container";

export const Routes = () => {
    const state = store.getState()
    const auth = state.loginReducer.isLogged
    interface IProps {
        path: string
        component: any
        auth: boolean
    }

    const GuardedRoute = ({ component: Component, auth, ...rest }: IProps) => (
      <Route {...rest} render={(props) => (
        auth
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />)

    return(
      <Switch>
          <Redirect exact from={"/"} to={"/login"} />
          <Route path={"/login"}>
              <LoginFormContainer />
          </Route>
          <GuardedRoute path={"/home"} component={HomepageContainer} auth={auth} />
      </Switch>
    )
}