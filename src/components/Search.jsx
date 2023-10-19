import React from 'react'
import { FloatingLabel, Container, Form, Col, Row, Button } from 'react-bootstrap'
import Best from './Best'
import Footer from './Footer'

const Search = () => {
    return (
        <>
        <Container style={{ paddingTop: '200px', width: '80%' }}>
            <Row className="g-2">

                <Col xs={3}>
                    <Form.Select style={{ height: '100%' }}>
                        <option>옵션을 선택하세요</option>
                        <option value="1">전체</option>
                        <option value="2">유니폼</option>
                        <option value="3">구단용품</option>
                        <option value="4">응원용품</option>
                    </Form.Select>
                </Col>

                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="제품을 검색하세요">
                        <Form.Control type="email" placeholder="유니폼" />
                    </FloatingLabel>
                </Col>

                <div style={{ textAlign: 'right' }}>
                    <Button style={{ backgroundColor: '#0B1648', border: 'none', marginTop: '5px' }}>검색하기</Button>
                </div>

            </Row>
        </Container>

        <Best></Best>

        <Footer></Footer>

        </>

        
    )
}

export default Search