import React, { useState, useEffect } from 'react'
import { getProverbs } from '../firebase/store';
import Proverb from '../components/Proverb'
import { resolvePromise } from '../helpers';

export default props => {
  const [proverbs, setProverbs] = useState([])

  useEffect(() => {
    resolvePromise(getProverbs)(setProverbs)
  }, [])

  const removeFromState = id => {
    const updatedProverbs = proverbs.filter(p => p.id !== id)
    setProverbs(updatedProverbs)
  }

  return (
    <div className='proverbs'>
      <h4>Proverbs List Page</h4>
      {
        !proverbs.length 
          ? <h5>No Proverbs found!!</h5>
          : proverbs.map(p => <Proverb key={p.id} {...p} removeFromState={removeFromState} />)
      }
    </div>
  )
}
