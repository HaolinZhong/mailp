import React from 'react'
import { Container, Table } from 'react-bootstrap'
import CourseRow from './CourseRow'

const CourseTable = ({courses}) => {
  return (
    <Container className='my-5'>
      <Table  hover>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Rating</th>
            <th># Reviews</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <CourseRow course={course} />
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default CourseTable