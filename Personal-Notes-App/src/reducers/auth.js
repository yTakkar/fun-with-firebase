import types from '../action_types'

const initialState = {
  authStatus: false,
  authApiStatus: false
}

const Auth = (state = initialState, action) => {
  const { type, payload } = action
  
  switch(type) {
    case types.UPDATE_AUTH_STATUS:
      return { ...state, authStatus: payload, authApiStatus: true }
    default:
      return state
  }
}

export default Auth