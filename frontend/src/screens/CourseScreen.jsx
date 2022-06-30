import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import CourseTable from '../components/CourseTable'
import axios from 'axios'

const CourseScreen = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get('/api/courses');
      setCourses(data)
    }
    fetchCourses()
  })

  return (
    <Container>
      <Row>
        <Col md={2} className="my-5">
          <Dropdown className="d-inline mx-2 my-5">
            <Dropdown.Toggle id="dropdown-autoclose-true" variant='outline-primary'>
              Filter By Department
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">BIST</Dropdown.Item>
              <Dropdown.Item href="#">EHSC</Dropdown.Item>
              <Dropdown.Item href="#">EPID</Dropdown.Item>
              <Dropdown.Item href="#">HPMN</Dropdown.Item>
              <Dropdown.Item href="#">POPF</Dropdown.Item>
              <Dropdown.Item href="#">SOSC</Dropdown.Item>
              <Dropdown.Item href="#">RESI</Dropdown.Item>
              <Dropdown.Item href="#">RSRH</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={10}>
          {courses && <CourseTable courses={courses} />}
        </Col>
      </Row>
    </Container>
  )
}

export default CourseScreen