import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import logo from './logo_brand.png'

const Header = () => {

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <image src={logo}>Mailp</image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 mx-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>Home</Nav.Link>

                            <Nav.Link>Courses</Nav.Link>


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