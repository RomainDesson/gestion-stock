import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import {Login} from "./features/login/login";

export const Routes = () => {
    return(
      <Switch>
          <Redirect exact from={"/"} to={"/login"} />
          <Route exact path={"/login"}>
              <Login />
          </Route>
      </Switch>
    )
}