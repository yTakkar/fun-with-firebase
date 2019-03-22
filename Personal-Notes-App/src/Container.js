import { useEffect } from 'react'
import { connect } from 'react-redux'
import appInitAction from './actions/appInitAction'

const Container = props => {
  const { children } = props

  useEffect(() => {
    props.appInitAction().init()
  }, [])

  return children
}

export default connect(null, { appInitAction })(Container)