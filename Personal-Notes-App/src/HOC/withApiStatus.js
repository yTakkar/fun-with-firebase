import React from 'react'
import Loader from '../components/Loader'

const withApiStatus = Component => {
  const WrappedComponent =  props => {
    return props.apiStatus 
      ? <Component {...props} />
      : <Loader/>
  }

  return WrappedComponent
}

export default withApiStatus
