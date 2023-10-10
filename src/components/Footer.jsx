import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Footer = () => {

    let fd = {
        with: '100%',
        height: '320px',
        backgroundColor: '#0B1648',
        display: 'flex',
        alignItems: 'center',
    }

    let fd_inner = {
        width: '1300px',
        height: 'auto',
        margin: '0 auto'
    }

    let icon_box = {
        width: '170px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1px'
    }

    let text = {
        textAlign: 'center',
        fontFamily: 'EsaManru',
        color: '#fff',
        lineHeight: '24px',
        fontWeight: 300,
        fontSize: '14px'
    }

    let fd_nav = {
        width: '500px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px',
        fontFamily: 'EsaManru',
        fontSize: '15px'
    }

    return (
        <div style={fd}>
            <div style={fd_inner}>

                <Nav defaultActiveKey="/home" as="ul" style={fd_nav}>
                    <Nav.Item as="li"  className='fd_nav'>
                        <Nav.Link href="/home">ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li"  className='fd_nav'>
                        <Nav.Link eventKey="link-1">이용약관</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li"  className='fd_nav'>
                        <Nav.Link eventKey="link-2">개인정보처리방침</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li"  className='fd_nav'>
                        <Nav.Link eventKey="link-2">사업자정보확인</Nav.Link>
                    </Nav.Item>
                </Nav>

                <p style={text}>
                    상호: (주)코어커뮤니케이션 | 대표: 이연규 대표 | 개인정보관리책임자: 김두원 팀장 | 전화: 02-3461-0527 | 이메일: core@corecomm.co.kr <br></br>
                    주소: 서울 서초구 강남대로39길 15-11, 201호 | 사업자등록번호: 872-86-01261 | 통신판매: 2019-서울서초-0887 | 호스팅제공자: (주)식스샵
                </p>

                <Nav defaultActiveKey="/home" as="ul" style={icon_box}>
                    <Nav.Item as="li">
                        <img src="./img/instagram.png" alt="instagram" style={{ width: '40px' }} />
                    </Nav.Item>
                    <Nav.Item as="li">
                        <img src="./img/facebook.png" alt="facebook" style={{ width: '40px' }} />
                    </Nav.Item>
                    <Nav.Item as="li">
                        <img src="./img/youtube.png" alt="youtube" style={{ width: '40px' }} />
                    </Nav.Item>
                </Nav>

            </div>
        </div>
    )
}

export default Footer