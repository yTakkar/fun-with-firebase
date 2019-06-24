import React, { useState } from 'react'
import { registerUser } from '../firebase/auth';
import { addUserInfo } from '../firebase/store/users';
import { sendPageView } from '../analytics';
import { ANALYTICS_PAGES } from "../constants";
import routes from '../routes';
import useOnMount from '../hooks/useOnMount';

const Register = props => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [city, setCity] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')

  useOnMount(() => {
    sendPageView({ page: routes.register, title: ANALYTICS_PAGES.REGISTER })
  })

  const register = () => {
    registerUser(email, password)
      .then(cred => {
        const { user } = cred
        addUserInfo(user.uid)({ name, age, city, })
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
          placeholder='Name..' 
          type='text' 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />
        <br/>
        <input 
          placeholder='City..' 
          type='text' 
          value={city} 
          onChange={e => setCity(e.target.value)} 
        />
        <br/>
        <input 
          placeholder='Age..' 
          type='number' 
          value={age} 
          onChange={e => setAge(e.target.value)} 
        />
        <br/>
        <input 
          placeholder='Password..' 
          type='password' 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        <br/>
        <button onClick={register} >Register</button>
        <div>
          {error}
        </div>
      </div>
    </div>
  )
}

export default Register
