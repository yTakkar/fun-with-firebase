import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, authStatus, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => 
        authStatus ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  )
}

export default PublicRoute
