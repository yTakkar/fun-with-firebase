import React, { useState, useEffect } from 'react'
import { ROUTE_LEVEL } from '../../constants';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import FullPageLoader from '../FullPageLoader';

const RouteAuth = props => {
  const { type, userAuth, authApiStatus, ...rest } = props
  const [authStatus, setAuthStatus] = useState(userAuth)

  useEffect(() => {
    setAuthStatus(userAuth)
  }, [userAuth])

  if (!authApiStatus || authStatus === null) return <FullPageLoader/>

  switch(type) {
    case ROUTE_LEVEL.PRIVATE:
      return <PrivateRoute {...rest} authStatus={authStatus} />
    case ROUTE_LEVEL.PUBLIC:
      return <PublicRoute {...rest} authStatus={authStatus} />
    default:
      return <Route {...rest} />
  }
}

const selector = state => {
  const { auth } = state
  const { authStatus, authApiStatus } = auth
  return {
    userAuth: authStatus,
    authApiStatus
  }
}

export default connect(selector)(RouteAuth)