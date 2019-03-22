import React, { useState, useEffect } from 'react'
import { getNotes } from '../firebase/store/notes';
import Note from '../components/Note'
import { resolvePromise } from '../helpers';

const Home = props => {
  const { history } = props
  const [notes, setNotes] = useState([])

  useEffect(() => {
    resolvePromise(getNotes)(setNotes)
  }, [])

  const removeFromState = id => {
    const updatedProverbs = notes.filter(p => p.id !== id)
    setNotes(updatedProverbs)
  }

  return (
    <div className='notes'>
      <h4>Home Page</h4>
        {
          !notes.length 
            ? <h5>No Notes Found</h5>
            : notes.map(n => <Note key={n.id} {...n} removeFromState={removeFromState} history={history} />)
        }
    </div>
  )
}

export default Home
