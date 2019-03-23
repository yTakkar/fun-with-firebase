import React from 'react'
import { connect } from 'react-redux'
import withApiStatus from '../HOC/withApiStatus';

const Account = props => {
  const { name, age, email, city, premium } = props

  return (
    <div>
      <h4>Account Page</h4>
      <div>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Age: {age}</div>
        <div>City: {city}</div>
        {premium && <h5>You are a premium member, but have no special privilages :(</h5>}
      </div>
    </div>
  )
}

const selector = ({ user }) => user

export default connect(selector)(
  withApiStatus(Account)
)
