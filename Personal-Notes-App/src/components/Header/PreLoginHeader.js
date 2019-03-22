import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <div>
    <ul>
      <li>
        <Link to='/login' >Login</Link>
      </li>
      <li>
        <Link to='/register' >Register</Link>
      </li>
    </ul>
  </div>
)
