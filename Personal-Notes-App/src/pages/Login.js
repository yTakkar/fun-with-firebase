import React, { useState } from 'react'
import { loginUser } from '../firebase/auth';
import { sendPageView, sendEvent } from '../analytics';
import { ANALYTICS_PAGES, ANALYTICS_EVENTS } from "../constants";
import routes from '../routes';
import useOnMount from '../hooks/useOnMount';

const Login = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useOnMount(() => {
    sendPageView({ page: routes.login, title: ANALYTICS_PAGES.LOGIN })
  })

  const login = () => {
    loginUser(email, password)
      .then(() => {
        sendEvent({ action: ANALYTICS_EVENTS.LOGIN_SUBMIT, label: 'LOGIN' })
      })
      .catch(e => setError(e.message))
  }

  return (
    <div>
      <h4>Login Page</h4>
      <div>
        <input 
          placeholder='Email..' 
          type='text' 
          value={email} 
          autoFocus
          onChange={e => setEmail(e.target.value)} 
        />
        <br/>
        <input 
          placeholder='Password..' 
          type='password' 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        <br/>
        <button onClick={login} >Register</button>
        <div>
          {error}
        </div>
      </div>
    </div>
  )
}

export default Login