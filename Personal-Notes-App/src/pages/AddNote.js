import React, { useState } from 'react'
import { addNote } from '../firebase/store/notes';
import { resolvePromise } from '../helpers';
import { sendPageView } from '../analytics';
import { ANALYTICS_PAGES } from "../constants";
import routes from '../routes';
import useOnMount from '../hooks/useOnMount';

const AddNote = props => {
  const { history } = props;
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useOnMount(() => {
    sendPageView({ page: routes.addNote, title: ANALYTICS_PAGES.ADD_NOTE })
  })

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