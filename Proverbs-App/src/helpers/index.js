import nanoid from 'nanoid'

export const uniqueId = nanoid()

export const resolvePromise = (promise, ...args) => successFn => {
  promise(...args)
    .then(successFn)
    .catch(console.log)
}
