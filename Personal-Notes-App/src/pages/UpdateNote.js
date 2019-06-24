import React, { useState } from 'react'
import { getNote, updateNote } from '../firebase/store/notes';
import { resolvePromise } from '../helpers';
import { sendPageView } from '../analytics';
import { ANALYTICS_PAGES } from "../constants";
import routes from '../routes'
import useOnMount from '../hooks/useOnMount';

const UpdateNote = props => {
  const { match, history } = props
  const { id } = match.params
  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  const { title, content } = note

  const onChange = (key, e) => {
    setNote({ ...note, [key]: e.target.value })
  }

  useOnMount(() => {
    sendPageView({ title: ANALYTICS_PAGES.UPDATE_NOTE, page: routes.updateNote })
    resolvePromise(getNote, id)(setNote)
  })

  const update = () => {
    resolvePromise(updateNote(id), { title, content })(() => history.push('/'))
  }

  return (
    <div>
      <h4>Update Note</h4>
      <div>
        <input 
          type='text' 
          value={title} 
          onChange={e => onChange('title', e)} 
          autoFocus
        />
        <br/>
        <textarea 
          value={content} 
          onChange={e => onChange('content', e)} >
        </textarea>
        <br/>
        <button onClick={update}>Update Proverb</button>
      </div>
    </div>
  )
}

export default UpdateNote