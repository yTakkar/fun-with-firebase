import React, { useState } from 'react'
import { getNotes } from '../firebase/store/notes';
import Note from '../components/Note'
import { resolvePromise } from '../helpers';
import { sendPageView } from '../analytics';
import { ANALYTICS_PAGES } from "../constants";
import routes from '../routes';
import useOnMount from '../hooks/useOnMount';

const Home = props => {
  const { history } = props
  const [notes, setNotes] = useState([])

  useOnMount(() => {
    sendPageView({ page: routes.main, title: ANALYTICS_PAGES.MAIN })
    resolvePromise(getNotes)(setNotes)
  })

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
