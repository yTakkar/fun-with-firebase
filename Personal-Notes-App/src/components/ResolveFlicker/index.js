const WithoutFlicker = props => {
  return (
    props.observe === null 
      ? null 
      : props.observe 
        ? props.whenTrue ?  props.whenTrue() : null
        : props.whenFalse ? props.whenFalse() : null
  )
}

export default WithoutFlicker
