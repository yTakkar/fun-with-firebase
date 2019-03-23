const logger = store => next => action => {
  console.group(action.type)
  console.log('dispatching', action)
  console.log('prev state', store.getState())
  const start = performance.now()
  const result = next(action)
  const end = performance.now()
  console.log('next state', store.getState())
  console.log('Time', Math.floor(end - start), 'ms')
  console.groupEnd()
  return result
}

export default logger
