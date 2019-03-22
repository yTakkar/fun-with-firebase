export const handleTryCatch = promise => async (...args) =>  {
  try {
    await promise(...args)
  } catch (e) {
    console.log(e)
  }
}

export const resolvePromise = (promise, ...args) => successFn => {
  promise(...args)
    .then(successFn)
    .catch(console.log)
}
