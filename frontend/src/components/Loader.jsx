import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'

const Loader = () => {
    return (
        <Row className="my-5">
            <Col md={3} />
            <Col md={6}><ProgressBar animated now={100} /></Col>
            <Col md={3} />
        </Row>
    )
}

export default Loader