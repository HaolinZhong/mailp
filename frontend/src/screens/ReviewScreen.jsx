import React from 'react'
import { Col, Container, Row, Toast, ToastContainer } from 'react-bootstrap'
import { useParams } from 'react-router'
import ReviewRow from '../components/ReviewRow'
import reviews from '../data/reviews.json'

const ReviewScreen = () => {

    const params = useParams();
    const curReviews = reviews.filter(review => review.course_id === params.id)

    return (
        <Container className='px-5 py-3'>
            {curReviews.map(review => (
                <ReviewRow review={review} />
            ))}
        </Container>
    )
}

export default ReviewScreen