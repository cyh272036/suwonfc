import React from 'react'
import { Container, Nav, Card } from 'react-bootstrap';

const Footer = () => {

    let fd = {
        with: '100%',
        height: '270px',
        backgroundColor: '#0B1648',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        top: '300px'
    }

    let icon_box = {
        width: '170px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
    }

    return (
        <div style={fd}>
            <Container>
                <Card style={{ backgroundColor: 'transparent', border: 'none', textAlign: 'center' }}>
                    <Card.Body style={{ backgroundColor: 'transparent', border: 'none' }}>
                        <Nav defaultActiveKey="/home" as="ul" className='footer_nav'>
                            <Nav.Item as="li" style={{marginRight: '20px'}}>
                                <Nav.Link href="/home" className='nav-link2'>ABOUT</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" style={{marginRight: '20px'}}>
                                <Nav.Link eventKey="link-1" className='nav-link2'>이용약관</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" style={{marginRight: '20px'}}>
                                <Nav.Link eventKey="link-2" className='nav-link2'>개인정보처리방침</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2" className='nav-link2'>사업자정보확인</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Card.Text>
                            <p className='footer_text'>
                                상호: (주)코어커뮤니케이션 | 대표: 이연규 대표 | 개인정보관리책임자: 김두원 팀장 | 전화: 02-3461-0527 | 이메일: core@corecomm.co.kr <br></br>
                                주소: 서울 서초구 강남대로39길 15-11, 201호 | 사업자등록번호: 872-86-01261 | 통신판매: 2019-서울서초-0887 | 호스팅제공자: (주)식스샵
                            </p>
                        </Card.Text>
                        <Nav defaultActiveKey="/home" as="ul" style={icon_box}>
                            <Nav.Item as="li">
                                <img src="../img/instagram.png" alt="instagram" style={{ width: '45px' }} />
                            </Nav.Item>
                            <Nav.Item as="li">
                                <img src="../img/facebook.png" alt="facebook" style={{ width: '45px' }} />
                            </Nav.Item>
                            <Nav.Item as="li">
                                <img src="../img/youtube.png" alt="youtube" style={{ width: '45px' }} />
                            </Nav.Item>
                        </Nav>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Footer