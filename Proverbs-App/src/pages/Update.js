import React, { useState, useEffect } from 'react'
import { getProverb, updateProverb } from '../firebase/store'
import { resolvePromise } from '../helpers';

export default props => {
  const { match, history } = props
  const { id } = match.params
  const [proverb, setProverb] = useState({ text: '' })

  useEffect(() => {
    resolvePromise(getProverb, id)(setProverb)
  }, [])

  const update = () => {
    updateProverb(id)(proverb.text)
    history.push('/list')
  }

  return (
    <div>
      <h4>Update Proverb</h4>
      <div>
        <textarea 
          autoFocus
          value={proverb.text} 
          onChange={e => setProverb({ ...proverb, text: e.target.value })} >
        </textarea>
        <br/>
        <button onClick={update}>Update Proverb</button>
      </div>
    </div>
  )
}