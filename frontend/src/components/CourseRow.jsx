import React from 'react'

const CourseRow = ({course}) => {

  return (
    <tr>
      <td>{course.id}</td>
      <td>
        <a href={`/courses/${course.id}`}>{course.name}</a>  
      </td>
      <td>{course.department}</td>
      <td>{course.rating}</td>
      <td>{course.numsReview}</td>
    </tr>
  )
}

export default CourseRow