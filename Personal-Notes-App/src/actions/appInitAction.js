import {  auth } from "../firebase/auth";
import types from '../action_types'
import { getUserInfo } from "../firebase/store/users";

export default () => (dispatch, getState) => {
  const init = () => {
    auth.onAuthStateChanged(async user => {
      console.log(user)
      if (user) {
        dispatch({ type: types.UPDATE_AUTH_STATUS, payload: true })

        const userInfo = await getUserInfo(user.uid)
        const { photoURL, phoneNumber, email } = user;
        const payload = { ...userInfo, photoURL, phoneNumber, email }
        dispatch({ type: types.UPDATE_USER_DATA, payload })

      } else {
        dispatch({ type: types.UPDATE_AUTH_STATUS, payload: false })
      }
    })
  }

  return {
    init
  }
}
