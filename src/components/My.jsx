import React from 'react'
import { Row, Container, Button, Form, Card, Col } from 'react-bootstrap'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const My = () => {

    let navigator = useNavigate();
    return (
        <>
            <Container style={{ paddingTop: '200px', width: '80%' }}>
                <Row>
                    <Col lg={6} style={{marginBottom: '20px'}}>
                        <Card className="text-center" style={{ padding: '0' }}>
                            <Card.Header style={{ width: '100%' }}>수원FC 온라인몰 신규회원 혜택</Card.Header>
                            <Card.Body>
                                <Card.Text style={{ padding: '10px 20px' }}>
                                    수원FC 온라인 스토어에서 계정을 생성하면 배송현황과 소식을 더 빠르게 만나볼 수 있고,
                                    회원대상으로 진행되는 다양한 이벤트에 참여하실 수 있습니다. 수원FC 회원가입을 통해 다양한 혜택을 만나보세요.
                                </Card.Text>
                                <Button variant="primary" style={{ backgroundColor: '#0B1648', border: 'none', marginTop: '-5px', wordBreak: 'keep-all', marginBottom: '15px' }}>신규회원 가입하기</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card style={{ padding: '30px 40px', border: '1px solid #eee' }} md={6} sm={12}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        이메일을 입력하세요
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="회원정보 저장하기" />
                                </Form.Group>
                                <Button variant="primary" type="submit" style={{ backgroundColor: '#0B1648', border: 'none', marginBottom: '25px' }} onClick={() => {
                                    navigator('/cart')
                                }}>
                                    로그인
                                </Button>
                                <div style={{ paddingTop: '20px', display: 'flex', flexDirection: 'column' }}>
                                    <p style={{ marginBottom: '5px' }}>간편로그인</p>
                                    <Button className='my-1 p-2' style={{ backgroundColor: '#fae300', border: 'none', 'color': '#000' }}>카카오톡으로 로그인하기</Button>
                                    <Button className='my-1 p-2' style={{ backgroundColor: '#2db400', border: 'none', 'color': '#fff' }}>네이버로 로그인하기</Button>
                                    <Button className='my-1 p-2' style={{ backgroundColor: '#3b5998', border: 'none', 'color': '#fff' }}>페이스북으로 로그인하기</Button>
                                </div>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </>
    )
}

export default My