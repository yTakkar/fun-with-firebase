import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, authStatus, location, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => 
        authStatus 
          ? <Component {...props} /> 
          : <Redirect to={{ pathname: '/login', state: { from: location } }} />
      }
    />
  )
}

export default PrivateRoute