import React from 'react'
import { Link } from 'react-router-dom'

const CourseRow = ({course}) => {

  return (
    <tr style={{fontSize: 15, textAlign: "center"}}>
      <td>{course.dept}</td>
      <td>{course.code}</td>
      <td style={{textAlign: "left"}}>
        <Link to={`/courses/${course._id}`}>{course.name}</Link>  
      </td>
      <td>{course.sect}</td>
      <td>{course.season}</td>
      <td>{course.numReviews === 0 ? "NA" : course.rating }</td>
      <td>{course.numReviews}</td>
    </tr>
  )
}

export default CourseRow