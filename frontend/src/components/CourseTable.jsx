import React from 'react'
import { Container, Table } from 'react-bootstrap'
import CourseRow from './CourseRow'

const CourseTable = ({courses}) => {
  return (
    <Container className='my-5'>
      <Table  hover size='sm' striped>
        <thead>
          <tr style={{fontFamily: "Raleway", fontSize: 13, textAlign: "center"}}>
            <th>Dept</th>
            <th>Code</th>
            <th>Name</th>
            <th>Sect</th>
            <th>Semester</th>
            <th>Avg. Rating</th>
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