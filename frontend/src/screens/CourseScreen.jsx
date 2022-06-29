import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import CourseTable from '../components/CourseTable'
import axios from 'axios'

const CourseScreen = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const {data} = await axios.get('/api/courses');
      setCourses(data)
    }
    fetchCourses()
  })

  return (
    <Container>
        {courses && <CourseTable courses={courses} />}
    </Container>
  )
}

export default CourseScreen