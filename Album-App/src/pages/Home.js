import React, { useEffect, useState } from 'react';
import { getFiles } from '../firebase/db';
import { getFileSourceFromStorage } from '../firebase/storage';

export default props => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getFiles()
      .then(files => getFileSourceFromStorage(files).then(setImages))
      .catch(console.log)
  }, [])

  return (
    <div className='container'>
      <h4>All uploaded files</h4>
      {
        !images.length 
          ? <h5>No Images Found!!</h5>
          : images.map(img => 
            <img key={img} src={img} alt={img}  style={{ maxWidth: 300 }} />
          )
      }
    </div>
  )
}
