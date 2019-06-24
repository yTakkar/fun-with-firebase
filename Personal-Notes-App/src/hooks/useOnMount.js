import { useEffect } from 'react'

const useOnMount = effectFn => useEffect(effectFn, [])

export default useOnMount