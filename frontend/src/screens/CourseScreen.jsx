import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import CourseTable from '../components/CourseTable'
import { useDispatch, useSelector } from 'react-redux'
import { listCourses } from '../actions/courseActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const CourseScreen = () => {

  const dispatch = useDispatch();

  const courseList = useSelector(state => state.courseList)

  const { loading, error, courses } = courseList

  useEffect(() => {
    dispatch(listCourses())
  }, [dispatch])

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        error ? (
          <Message variant="danger">{error}</Message>
        ) : (
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
        )
      )}
    </Container>
  )
}

export default CourseScreen