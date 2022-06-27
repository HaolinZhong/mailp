import React from 'react'
import { PropTypes } from 'prop-types'

const Star = ({value}) => {
  const icon = (value >= 1 ? 'fa-solid fa-star' : (value >= 0.5 ? 'fa-solid fa-star-half-stroke' : 'fa-regular fa-star'))
  const color = (value >= 0.5? '#fbc901' : 'grey')
  return (
    <i 
      className={icon}
      style={{color}}  
    />
  )
}


Star.defaultProps = {
  color: '#fbc901'
}


Star.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string
}



export default Star