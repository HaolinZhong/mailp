import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const MessageCol = ({ title, content, btnTo, btnMessage }) => {
    return (
        <Col md={3}>
            <Card className='px-1 shadow h-100'>
                <Card.Body className='clear-fix'>
                    <Card.Title style={{ fontFamily: "Raleway", fontSize: 30 }} className="my-2">{title}</Card.Title>
                    <Card.Text style={{ fontSize: 16 }} className="py-1">{content}</Card.Text>
                    {btnTo && (
                        <Button
                            variant="outline-primary"
                            size='md' 
                            className='float-end'
                        >
                            {btnMessage}
                        </Button>
                    )}
                </Card.Body>

            </Card>
        </Col>
    )
}

export default MessageCol