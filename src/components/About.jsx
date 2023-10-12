import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap';

const About = () => {

    return (

        <Container style={{ marginTop: '100px' }}>
        <Row>

          <Col md={12} xl={6}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img src="./img/index.jpg" />
            </Card>
          </Col>

          <Col md={12} xl={6}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img src="./img/index2.jpg" />
            </Card>
          </Col>

          <Col md={12} xl={6}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img src="./img/index3.jpg"/>
            </Card>
          </Col>

          <Col md={12} xl={6}>
            <Card>
              <Card.Img src="./img/index4.jpg"/>
            </Card>
          </Col>

        </Row>
      </Container>
    )
}

export default About