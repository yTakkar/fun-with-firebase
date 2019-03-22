import React from 'react'
import { connect } from 'react-redux'

const Account = props => {
  const { name, age, email, city } = props

  return (
    <div>
      <h4>Account Page</h4>
      <div>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Age: {age}</div>
        <div>City: {city}</div>
      </div>
    </div>
  )
}

const selector = ({ user }) => user

export default connect(selector)(Account)