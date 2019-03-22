import store from './index'
import { currentUser } from '../auth'

const notes = store.collection('notes')
const getNoteDoc = id => notes.doc(id)

export const addNote = (title, content) => {
  return notes.add({ 
    uid: currentUser().uid, 
    title, 
    content, 
    time: new Date() 
  })
}

export const getNotes = async () => {
  const data = await notes.orderBy('time', 'desc').where('uid', '==', currentUser().uid).get()
  return data.docs.map(p => ({ ...p.data(), id: p.id, }))
}

export const deleteNote = id => notes.doc(id).delete()

export const getNote = async id => {
  const doc = await getNoteDoc(id).get()
  return doc.data()
}

export const updateNote = id => updatedNote => getNoteDoc(id).update({ ...updatedNote, time: new Date() })
