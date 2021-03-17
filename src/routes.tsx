import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import {Login} from "./features/login/login";
import {HomePage} from "./components/HomePage";
import { store } from './store'

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
        auth === true
          ? <Component {...props} />
          : <Redirect to='/' />
      )} />)
    console.log(auth)

    return(
      <Switch>
          <Redirect exact from={"/"} to={"/login"} />
          <Route exact path={"/login"}>
              <Login />
          </Route>
          <GuardedRoute path={"/home"} component={HomePage} auth={auth} />
      </Switch>
    )
}