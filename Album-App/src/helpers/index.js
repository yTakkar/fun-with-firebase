import { storageRef } from "../firebase/storage";
import { addToDatabase } from '../firebase/db';

export const uploadFile = file => (progressFn, successFn) => {
  const filePath = `uploads/${file.name}`
  const ref = storageRef.child(filePath)
  const upload = ref.put(file, { contentType: 'image/*' })

  upload.on(
    'state_changed', 
    snapshot => {
      const { bytesTransferred, totalBytes } = snapshot
      const progress = (bytesTransferred / totalBytes) * 100
      progressFn(progress)
    },
    err => console.log('err', err),
    () => {
      addToDatabase(filePath)
        .then(() => successFn(true))
        .catch(console.log)
    }
  )
}