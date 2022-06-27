import React from 'react'
import { PropTypes } from 'prop-types'
import Star from './Star'

const Rating = ({value}) => {
  return (
    <span>
        <Star value={value}   />
        <Star value={value-1} />
        <Star value={value-2} />
        <Star value={value-3} />
        <Star value={value-4} />
    </span>
  )
}


Rating.propTypes = {
    value: PropTypes.number.isRequired
}

export default Rating