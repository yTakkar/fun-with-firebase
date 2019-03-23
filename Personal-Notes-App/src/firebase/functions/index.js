import firebase from 'firebase/app'
import 'firebase/functions'
import '../init'
import { currentUser } from '../auth';

const functions = firebase.functions()

export const addPremiumMembership = () => {
  const { uid } = currentUser()
  const addPremiumRole = functions.httpsCallable('addPremiumRole')
  return addPremiumRole({ uid })
}

export const revokePremiumMembership = () => {
  const { uid } = currentUser()
  const revokePremiumRole = functions.httpsCallable('revokePremiumRole')
  return revokePremiumRole({ uid })
}
