import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Login, Home } from './assembly'



export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route paht='/' render={() => {
            return sessionStorage.getItem('isLogin') ? (
              <Switch>
                <Route path="/home" component={Home} />
              </Switch>
            ) : <Redirect to='/login' />
          }} />
        </Switch>
      </BrowserRouter>
    )
  }
}
