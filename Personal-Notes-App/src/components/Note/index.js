import React from 'react'
import { deleteNote } from '../../firebase/store/notes';
import { resolvePromise } from '../../helpers'

const Note = props => {
  const { title, content, id, removeFromState, history } = props;

  const del = () => {
    resolvePromise(deleteNote, id)(() => removeFromState(id))
  }

  const update = () => history.push(`/update-note/${id}`)

  return (
    <div className='note'>
      <div>{title}</div>
      <div>{content}</div>
      <div className='note-btns'>
        <button onClick={del}>Delete</button>
        {' '}
        <button onClick={update} >Update</button>
      </div>
    </div>
  )
}

export default Note