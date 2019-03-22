import firebase from 'firebase/app'
import 'firebase/firestore'
import './init'

export const store = firebase.firestore()
export const proverbsCol = store.collection('proverbs')
export const getProverbDoc = id => proverbsCol.doc(id)

export const getProverb = async id => {
  const doc = await getProverbDoc(id).get()
  return doc.data()
}

export const getProverbs = async () => {
  const data = await proverbsCol.orderBy('time', 'desc').get()
  return data.docs.map(p => ({ ...p.data(), id: p.id, }))
}

export const deleteProverb = id => getProverbDoc(id).delete()

export const updateProverb = id => text => getProverbDoc(id).set({ text, time: new Date() })

export const addProverb = text => proverbsCol.add({ text, time: new Date() })
