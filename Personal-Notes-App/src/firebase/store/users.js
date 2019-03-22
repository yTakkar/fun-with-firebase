import store from './index'

export const users = store.collection('users')

const getUserInfoRef = id => users.doc(id)

export const addUserInfo = uid => info => getUserInfoRef(uid).set({ ...info })

export const getUserInfo = async id => {
  const doc = await getUserInfoRef(id).get()
  return doc.data()
}
