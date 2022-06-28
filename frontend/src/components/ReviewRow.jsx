import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Rating from './Rating'

const ReviewRow = ({ review }) => {

    const date = new Date("2022-06-10T05:44:54.869+00:00");

    return (
        <Container className='py-3 px-5' fluid="md">
            <Card className='shadow'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <Rating value={review.rating}/>
                    <span className='text-right'>{date.toISOString().slice(0, 10)}</span>
                </Card.Header>
                <Card.Body>
                    <Row className='my-3'>
                        <Card.Text style={{fontSize: 15, fontFamily: 'Roboto'}}>
                            {review.body}
                        </Card.Text>
                    </Row>

                    <Row>
                        <Col md="3">
                            <Button variant="outline-dark" size='sm' className='mx-1'>Workload: {review.workload}</Button>
                            <Button variant={review.difficulty >= 4 ? "outline-danger" : (
                                review.difficulty >= 3 ? "outline-warning" : "outline-success"
                            )} size='sm' className='mx-1'>Difficulty: {review.difficulty}</Button>
                        </Col>
                        <Col md="7"></Col>

                        <Col md="1">
                            <span><i class="fa-regular fa-thumbs-up">{`  ${review.numsLike}`}</i></span>

                        </Col>

                        <Col md="1">
                            <span><i class="fa-regular fa-thumbs-down">{`  ${review.numsDislike}`}</i></span>
                        </Col>

                    </Row>


                </Card.Body>
            </Card>
        </Container>
    )
}

export default ReviewRow