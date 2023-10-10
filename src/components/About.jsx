import React from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const About = () => {

    let index_wrap = {
        width: '1300px',
        height: 'auto',
        margin: '0 auto',
        marginTop: '100px',
    }

    let index = {
        width: '650px',
        height: '500px',
        marginBottom: '10px'
    }
  return (
    <div style={index_wrap}>
    <Row>
        <Col  md={6}>
            <Image src="./img/index.jpg" style={index}/>
        </Col>
        <Col  md={6}>
            <Image src="./img/index2.jpg" style={index}/>
        </Col>
        <Col md={6}>
            <Image src="./img/index3.jpg" style={index}/>
        </Col>
        <Col  md={6}>
            <Image src="./img/index4.jpg" style={index}/>
        </Col>
    </Row>
    </div>
  )
}

export default About