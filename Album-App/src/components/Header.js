import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <div>
    <ul>
      <li>
        <Link to='/' >Home</Link>
      </li>
      <li>
        <Link to='/upload' >Upload</Link>
      </li>
    </ul>
  </div>
)