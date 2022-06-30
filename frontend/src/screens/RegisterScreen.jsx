import React, { useState } from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import FormContainer from '../components/FormContainer'

const RegisterScreen = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")

    const submitHandler = () => {
        console.log("submitted")
    }

    return (
        <Container style={{ fontFamily: "Raleway" }} className='px-5'>
            <FormContainer >
                <h1 className='my-2' >Register</h1>
                <Form onSubmit={submitHandler}>
                    <FormGroup controlId='name' className='py-2'>
                        <FormLabel>User Name</FormLabel>
                        <FormControl
                            type='text'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId='email' className='py-2'>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId='password' className='py-2'>
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId='confPassword' className='py-2'>
                        <FormLabel>Confirm Your Password</FormLabel>
                        <FormControl
                            type='password'
                            placeholder='Confirm password'
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                        >
                        </FormControl>
                    </FormGroup>
                    <Row>
                        <Col md={3}>
                            <Button type='submit' variant='primary' className='my-3'>
                                Register
                            </Button>
                        </Col>
                        <Col md={3} />
                        <Col md={4} className="my-4 px-0 align-middle">already registered?</Col>
                        <Col md={2} className="my-3 px-0 align-middle">
                            <LinkContainer to="/login" >
                                <Button
                                    type="null"
                                    variant="outline-primary"
                                    size='md'
                                >
                                    login
                                </Button>
                            </LinkContainer>

                        </Col>

                    </Row>

                </Form>

                <Row>
                    <Col>

                    </Col>

                </Row>
            </FormContainer>
        </Container>
    )
}

export default RegisterScreen