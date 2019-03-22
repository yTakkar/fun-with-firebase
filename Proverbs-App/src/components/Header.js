import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <div>
    <ul>
      <li>
        <Link to='/' >Home</Link>
      </li>
      <li>
        <Link to='/add' >Add</Link>
      </li>
      <li>
        <Link to='/list' >List</Link>
      </li>
    </ul>
  </div>
)