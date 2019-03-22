import React, { useState } from 'react'
import { addNote } from '../firebase/store/notes';
import { resolvePromise } from '../helpers';

const AddNote = props => {
  const { history } = props;
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const add = () => {
    resolvePromise(addNote, title, content)(() => history.push('/'))
  }

  return (
    <div>
      <h4>Add Note Page</h4>
      <div>
        <input 
          type='text' 
          placeholder='Title..'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br/>
        <textarea
          placeholder='Content..'
          value={content}
          onChange={e => setContent(e.target.value)}
        ></textarea>
        <br/>
        <button onClick={add}>Add</button>
      </div>
    </div>
  )
}

export default AddNote