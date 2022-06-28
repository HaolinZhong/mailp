import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import MessageCol from '../components/MessageCol'
import courses from "../data/courses.json"
import cover from "../components/cover.jpg"

const HomeScreen = () => {
  return (
    <Container className='py-3'>
      <Image src={cover} style={{width: "100%"}} className="px-2 my-2"/>

      <Row className='my-2'>
        <MessageCol
          title="What's this ?"
          content="Mailp is an unofficial app created for Mailman students to discuss course difficulty and workload."
        />

        <MessageCol
          title="Accessibility"
          content="Currently, only students with Columbia University emails are allowed to register. Only logged in users can browse and write reviews."
        />

        <MessageCol
          title="New User?"
          content="Register with your Columbia email!"
          btnTo="register"
          btnMessage="Register"
        />

        <MessageCol
          title="Privacy?"
          content="All reviews are shown anonymously."
          btnTo="about"
          btnMessage="Privacy Policy"
        />

      </Row>

    </Container>
  )
}

export default HomeScreen