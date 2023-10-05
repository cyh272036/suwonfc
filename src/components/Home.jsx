// import React, { useState, useRef } from 'react'
import { Container, Row, Carousel, Card, Button, ToggleButtonGroup, ToggleButton, Col } from 'react-bootstrap'
import Product from './Product';
import Title from './Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// import data2 from '../data2';

const Home = (props) => {
  let { goods, setGoods, origin } = props;

  let buttonStyle = {
    backgroundColor: '#0B1648',
    border: 'none',
    fontFamily: 'pretendard',
    padding: '20px 40px'
  }

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

  let buttonStyle3 = {
    backgroundColor: '#0B1648',
    border: 'none',
    fontFamily: 'pretendard',
    fontSize: '1.2rem',
    padding: '15px 30px',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%,0)',
    marginTop: '30px'
  }


  return (
    <>
      <div className='slider'></div>

      <Carousel fade className='slide' interval={2000}>
        <Carousel.Item>
          <img src='/img/slide.jpg' alt='slideimg'></img>
        </Carousel.Item>

        <Carousel.Item>
          <img src='/img/slide2.jpg' alt='slideimg'></img>
        </Carousel.Item>

        <Carousel.Item>
          <img src='/img/slide4.jpg' alt='slideimg'></img>
        </Carousel.Item>

        <Carousel.Item>
          <img src='/img/slide5.jpg' alt='slideimg'></img>
        </Carousel.Item>
      </Carousel>

      <div className="we_wrap">
        <div className='we'>
          <div className="we_headline">
            <h1>WE ARE SUWON FC</h1>
          </div>
          <div className="we_text">
            <p>수원FC가 걸어온 길이, 곧 한국축구의 역사입니다.<br></br>
              2003년 수원시청 직장운동경기부로 시작해 ‘실업리그’를 거쳐 ‘2부 리그’ 입성과 실업리그 출신 팀으로는 <br></br>
              처음으로 이뤄낸 ‘K리그’ 진출까지, 우리나라에서 ‘축구의 열정’을 가장 잘 보여준 팀이었습니다. <br></br>
              2부 리그 강등에도 굴하지 않고, 다시 1부 리그에 진출하며 그 질주를 이어가고 있습니다.</p>
          </div>
        </div>
      </div>

      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src='/img/card_1.jpg' alt="img" />
        </SwiperSlide>
        <SwiperSlide>
        <img src='/img/card_2.jpg' alt="img" />
        </SwiperSlide>
        <SwiperSlide>
        <img src='/img/card_3.jpg' alt="img" />
        </SwiperSlide>
        <SwiperSlide>
        <img src='/img/card_4.jpg' alt="img" />
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <div className="card_wrap">
        <div className='card_list'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/img/card_1.jpg' />
            <Card.Body>
              <Card.Title style={card_text_one}>한정판 레트로 유니폼 출시</Card.Title>
              <Card.Text style={card_text_two}>
                수원FC의 2023 레트로 유니폼을 공개합니다.<br></br>
                선착순 100명에게 특별한 선물을 준비했으니 <br></br>
                고민말고 지금 주문하세요!
              </Card.Text>
              <Button variant="primary" style={buttonStyle2}>주문하기</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/img/card_2.jpg' />
            <Card.Body>
              <Card.Title style={card_text_one}>소지품 검사 강화 안내</Card.Title>
              <Card.Text style={card_text_two}>
                안전한 경기 관람을 위해 입장 게이트에서 소지품 검사가 강화됩니다.
                안전하고 성숙한 관람 문화를 위해 팬 여러분들의 협조 부탁드립니다.
              </Card.Text>
              <Button variant="primary" style={buttonStyle2}>더보기</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/img/card_3.jpg' />
            <Card.Body>
              <Card.Title style={card_text_one}>WELCOME 바우테르손</Card.Title>
              <Card.Text style={card_text_two}>
                지능적이고 저돌적인 선수, 바우테르손 실바! <br></br>
                팀원과의 적극적이 소통으로 빠르게 적응하겠다는 포부를 밝히며
                수원FC는 합류 소감을 전했습니다
              </Card.Text>
              <Button variant="primary" style={buttonStyle2}>더보기</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/img/card_4.jpg' />
            <Card.Body>
              <Card.Title style={card_text_one}>팬 일레븐 투표 안내</Card.Title>
              <Card.Text style={card_text_two}>
                팬 투표는 5일(수) 정오부터 16일(일) 자정까지<br></br>
                K리그 멤버십 어플리케이션 'Kick'에서 진행되니 <br></br>
                수원FC 팬 여러분의 많은 참여 부탁드립니다
              </Card.Text>
              <Button variant="primary" style={buttonStyle2}>투표하러 가기</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Title></Title>

      <div className='button_box'>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton id="tbg-radio-1" style={buttonStyle} value={1} onClick={() => {

            setGoods(origin)
            console.log(origin, goods)
            setTimeout(() => {
              let copy = [...goods].filter(goods => goods.content === 'a')
              setGoods(copy);
            }, 50)

          }}>유니폼
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" style={buttonStyle} value={2} onClick={() => {

            setGoods(origin)
            console.log(origin, goods)
            // let copy = [...goods].filter(goods => goods.content === 'b')
            // setGoods(copy);
            setTimeout(() => {
              let copy = [...goods].filter(goods => goods.content === 'b')
              setGoods(copy);
            }, 50)
          }}>
            구단용품
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" style={buttonStyle} value={3} onClick={() => {
            setGoods(origin)
            let copy = [...goods].filter(goods => goods.content === 'c')
            setGoods(copy);
          }}>응원용품
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <Container style={{ marginTop: '80px' }}>
        <Row>
          {
            goods.map((a, i) => {
              return (
                <Product goods={goods[i]} key={i}></Product>
              )
            })
          }
        </Row>
      </Container>

      <Button variant="primary" style={buttonStyle3} onClick={() => { }}>+ 3개 상품 더보기</Button>

      <div className='banner'>
      </div>

      <div className='insta_title'>
        <h1><span>SUWONFC </span>INSTAGRAM</h1>
      </div>

      <Container>
        <Row>
          <Col md={3} className='insta'>
            <img src='/img/card_1.jpg'></img>
          </Col>
          <Col md={3} className='insta'>
            <img src='/img/card_1.jpg'></img>
          </Col>
          <Col md={3} className='insta'>
            <img src='/img/card_1.jpg'></img>
          </Col>
          <Col md={3} className='insta'>
            <img src='/img/card_1.jpg'></img>
          </Col>
        </Row>
      </Container>

      <Button variant="primary" style={buttonStyle3} onClick={() => { }}>모두 보기</Button>


    </>
  )
}

export default Home