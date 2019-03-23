import types from '../action_types'

const initialState = {
  name: '',
  city: '',
  bio: '',
  age: null,
  premium: null,
  apiStatus: null
}

const Auth = (state = initialState, action) => {
  const { type, payload } = action
  
  switch(type) {
    case types.UPDATE_USER_DATA:
      return { ...state, ...payload, apiStatus: true}

    case types.RESET_USER_DATA:   
      return initialState

    default:
      return state
  }
}

export default Auth