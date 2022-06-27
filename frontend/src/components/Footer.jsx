import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Row className='py-2'>
            <Col className='text-center py-3'>
                <p>If you find this website useful, welcome to star the repo for this project in Github!</p>
                <iframe src="https://ghbtns.com/github-btn.html?user=HaolinZhong&repo=mailp&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
            </Col>
        </Row>
    </footer>
  )
}

export default Footer