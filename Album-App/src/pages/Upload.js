import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {uploadFile} from '../helpers';

export default props => {
  const [progress, setProgress] = useState(0)
  const [uploaded, setUploaded] = useState(false)

  const onChange = e => {
    const { files } = e.target
    const [file] = files;
    uploadFile(file)(setProgress, setUploaded)
  }

  return (
    <div className='container'>
      <h4>File Upload with Firebase</h4>
      <progress value={progress} max='100' id='progress' >{progress}%</progress>
      <input type='file' onChange={onChange} id='fileButton' accept='image/*' />
      <br/>
      {uploaded && <Link to='/'>Uploaded. Have a look</Link>}
    </div>
  )
}
