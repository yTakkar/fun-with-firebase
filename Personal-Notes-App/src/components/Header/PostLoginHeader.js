/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { Link } from 'react-router-dom'
import { logOutUser } from '../../firebase/auth';

const PostLoginHeader = props => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/' >Home</Link>
        </li>
        <li>
          <Link to='/account' >Account</Link>
        </li>
        <li>
          <Link to='/add-note' >Add Note</Link>
        </li>
        <li>
          <a href='#' onClick={logOutUser} >Logout</a>
        </li>
      </ul>
    </div>
  )
}

export default PostLoginHeader