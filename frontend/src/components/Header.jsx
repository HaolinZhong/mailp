import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import logo from './logo_brand.png'

const Header = () => {

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='my-1'>
                        <img src={logo} width="110" height="50" alt="Mailp" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 mx-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>


                            <Nav.Link href="/courses">Courses</Nav.Link>


                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search Courses..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                        <Nav
                            className="ms-auto my-2 mx-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link href="/login"><i className='fas fa-user' />{`  Login`}</Nav.Link>
                            <NavDropdown title="Login">
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                <NavDropdown.Item>My Reviews</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link className='mx-2 my-1'>
                                <iframe src="https://ghbtns.com/github-btn.html?user=HaolinZhong&repo=mailp&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
                            </Nav.Link>

                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header