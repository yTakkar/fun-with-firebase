import React from 'react'
import { withRouter } from 'react-router-dom'
import { deleteProverb } from '../firebase/store'
import { resolvePromise } from '../helpers';

const Proverb = props => {
  const { text, id, removeFromState, history } = props;

  const del = () => {
    resolvePromise(deleteProverb, id)(() => removeFromState(id))
  }

  const update = () => history.push(`/update/${id}`)

  return (
    <div className='proverb'>
      <div>{text}</div>
      <div className='proverb-btns'>
        <button onClick={del}>Delete</button>
        {' '}
        <button onClick={update} >Update</button>
      </div>
    </div>
  )
}

export default withRouter(Proverb)