import firebase from 'firebase/app'
import 'firebase/storage'
import './initFirebase'

export const storageRef = firebase.storage().ref()

export const getFileSource = async ref => {
  const source = await ref.getDownloadURL()
  return source
}

export const getFileSourceFromStorage = async files => {
  const sources = []
  for (let file of files) {
    const ref = storageRef.child(file.filePath)
    const source = await getFileSource(ref)
    await sources.push(source)
  }
  return sources
}
