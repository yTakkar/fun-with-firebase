import firebase from 'firebase/app'
import 'firebase/auth'
import '../init'

export const auth = firebase.auth()

export const registerUser = (email, password) => {
  return new Promise((resolve, reject) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(resolve)
      .catch(reject)
  })
}

export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(resolve)
      .catch(reject)
  })
}

export const currentUser = () => auth.currentUser

export const logOutUser = () => auth.signOut()