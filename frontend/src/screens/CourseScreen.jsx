import React from 'react'
import { Container } from 'react-bootstrap'
import CourseTable from '../components/CourseTable'
import courses from '../data/courses.json'

const CourseScreen = () => {
  return (
    <Container>
        <CourseTable courses={courses} />
    </Container>
  )
}

export default CourseScreen