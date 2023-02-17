import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import SignUp from "./components/register/SignUp"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignIn from "./components/register/SignIn"
import PrivateRoute from "./components/register/PrivateRoute"
import ForgotPass from "./components/register/ForgotPass"
import Update from "./components/register/Update"
import Dashboard from "./components/cloud/Dashboard"
import "./components/main.css"

ReactDOM.render(
  <Router>
  <AuthProvider>
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />
      <PrivateRoute path="/update-profile" component={Update} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/forgot-password" component={ForgotPass} />
    </Switch>
  </AuthProvider>
</Router>,
  document.getElementById("root")
)
