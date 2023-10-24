import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Notice = () => {

  let card_text_one = {
    width: '80%',
    fontFamily: 'pretendard',
    fontSize: '1.1rem',
    fontWeight: 700,
  }

  let card_text_two = {
    fontFamily: 'pretendard',
    fontSize: '0.8rem'
  }

  let buttonStyle2 = {
    backgroundColor: '#0B1648',
    border: 'none',
    fontFamily: 'pretendard',
    fontSize: '0.7rem',
  }

  return (
    <div className="card_wrap" style={{ marginTop: '150px', marginBottom: '150px', backgroundColor: '#eee', padding: '80px 0' }}>
      <Container>
        <Row>

          <Col md={6} xl={3}>
            <Card className='my-3'> 
              <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/card_1.jpg'} className='card_img' />
              <Card.Body>
                <Card.Title style={card_text_one}>한정판 레트로 유니폼 출시</Card.Title>
                <Card.Text style={card_text_two}>
                  수원FC의 2023 레트로 한정판 유니폼을 공개합니다.
                  먼저 주문하신 100명에게 특별한 선물을 준비했으니 
                  고민말고 지금 주문하세요!
                </Card.Text>
                <Button variant="primary" style={buttonStyle2}>주문하기</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xl={3}>
            <Card className='my-3'>
              <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/card_2.jpg'} className='card_img' />
              <Card.Body>
                <Card.Title style={card_text_one}>소지품 검사 강화 안내</Card.Title>
                <Card.Text style={card_text_two}>
                  안전한 경기 관람을 위해 입장 게이트에서 소지품 검사가 강화됩니다.
                  안전하고 성숙한 관람 문화를 위해 팬 여러분들의 협조 부탁드립니다.
                </Card.Text>
                <Button variant="primary" style={buttonStyle2}>더보기</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xl={3}>
            <Card className='my-3'>
              <Card.Img variant="top" src={process.env.PUBLIC_URL +'/img/card_3.jpg'} className='card_img' />
              <Card.Body>
                <Card.Title style={card_text_one}>WELCOME 바우테르손</Card.Title>
                <Card.Text style={card_text_two}>
                  지능적이고 저돌적인 선수, 바우테르손 실바!
                  팀원과의 적극적이 소통으로 빠르게 적응하겠다는 포부를 밝히며
                  수원FC는 합류 소감을 전했습니다
                </Card.Text>
                <Button variant="primary" style={buttonStyle2}>더보기</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xl={3}>
            <Card className='my-3'>
              <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/card_4.jpg'} className='card_img' />
              <Card.Body>
                <Card.Title style={card_text_one}>팬 일레븐 투표 안내</Card.Title>
                <Card.Text style={card_text_two}>
                  팬 투표는 5일(수) 정오부터 16일(일) 자정까지
                  K리그 멤버십 어플리케이션 'Kick'에서 진행되니
                  수원FC 팬 여러분의 많은 참여 부탁드립니다
                </Card.Text>
                <Button variant="primary" style={buttonStyle2}>투표하러 가기</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Notice