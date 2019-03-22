import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, authStatus, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      authStatus ? <Redirect to='/' /> : <Component {...props} />
    }
  />
)

export default PublicRoute
