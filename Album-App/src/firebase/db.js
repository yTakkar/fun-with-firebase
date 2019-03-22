import firebase from 'firebase/app'
import 'firebase/firestore'
import './init'

export const store = firebase.firestore()
export const albumCol = store.collection('album')

export const addToDatabase = filePath => albumCol.add({ filePath, time: new Date() })

export const getFiles = async () => {
  const data = await albumCol.orderBy('time', 'desc').limit(15).get()
  return data.docs.map(p => ({ ...p.data(), id: p.id }))
}
