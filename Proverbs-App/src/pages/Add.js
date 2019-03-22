import React, { useState } from 'react'
import { addProverb } from '../firebase/store';
import { resolvePromise } from '../helpers'

export default props => {
  const { history } = props
  const [proverb, setProverb] = useState('')

  const add = () => {
    resolvePromise(addProverb, proverb)(() => {
      setProverb('')
      history.push(`/list`)
    })
  }

  return (
    <div>
      <h4>Add Page</h4>
      <div>
        <textarea 
          autoFocus
          placeholder='Enter a Proverb' 
          value={proverb} 
          onChange={e => setProverb(e.target.value)} >
        </textarea>
        <br/>
        <button onClick={add}>Add Proverb</button>
      </div>
    </div>
  )
}