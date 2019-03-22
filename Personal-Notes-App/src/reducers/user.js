import types from '../action_types'

const initialState = {
  name: '',
  city: '',
  bio: '',
  age: null
}

const Auth = (state = initialState, action) => {
  const { type, payload } = action
  
  switch(type) {
    case types.UPDATE_USER_DATA:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default Auth