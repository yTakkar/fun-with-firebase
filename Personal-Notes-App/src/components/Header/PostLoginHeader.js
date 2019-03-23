/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { Link } from 'react-router-dom'
import { logOutUser } from '../../firebase/auth';
import { addPremiumMembership, revokePremiumMembership } from '../../firebase/functions';
import { resolvePromise } from '../../helpers'
import types from '../../action_types'
import { connect } from 'react-redux'
import WithoutFlicker from '../ResolveFlicker';

const PostLoginHeader = props => {

  const logout = e => {
    e.preventDefault()
    resolvePromise(logOutUser)(() => props.dispatch({ type: types.RESET_USER_DATA }))
  }

  const togglePremium = (promise, payload) => e => {
    e.preventDefault()
    resolvePromise(promise)(() => {
      props.dispatch({ type: types.UPDATE_USER_DATA, payload: { premium: payload } })
    })
  }

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
        <WithoutFlicker 
          observe={props.premium} 
          whenFalse={() => 
            <li>
              <a href='#' onClick={togglePremium(addPremiumMembership, true)} >Become Premium Member</a>
            </li>
          }
          whenTrue={() => 
            <li>
              <a href='#' onClick={togglePremium(revokePremiumMembership, false)} >Revoke Premium Membership</a>
            </li>
          }
        />        
        <li>
          <a href='#' onClick={logout} >Logout</a>
        </li>
      </ul>
    </div>
  )
}

const selector = ({ user }) => ({ premium: user.premium })

export default connect(selector)(PostLoginHeader)
