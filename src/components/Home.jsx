import { useState } from 'react';
import { Container, Row, Carousel, Card, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import axios from 'axios';

import Product from './Product';
import Title from './Title';
import Instagram from './Instagram';
import More from './More';
import Best from './Best';
import About from './About';
import Footer from './Footer';
import data from '../data';
import data2 from '../data2';

const Home = (props) => {
  let { goods, setGoods } = props;
  let origin = data;
  let [more, setMore] = useState(data2);
  let [count, setCount] = useState(1);

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

      {/* slider */}
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

      {/* We are suwonFC */}
      <div className="we_wrap">
        <div className='we'>
          <div className="we_headline">
            <h1>WE ARE SUWON FC</h1>
          </div>
          <div className="we_text">
            <p>수원FC가 걸어온 길이, 곧 한국축구의 역사입니다.<br></br>
              2003년 수원시청 직장운동경기부로 시작해 실업리그를 거쳐 2부 리그 입성과 실업리그 출신 팀으로는 <br></br>
              처음으로 이뤄낸 K리그 진출까지, 우리나라에서 축구의 열정을 가장 잘 보여준 팀이었습니다. <br></br>
              2부 리그 강등에도 굴하지 않고, 다시 1부 리그에 진출하며 그 질주를 이어가고 있습니다.</p>
          </div>
        </div>
      </div>

      {/* index */}
      <About></About>

      {/* 베스트 상품*/}
      <Container>
        <div className='insta_title'>
          <h1><span>BEST </span>PRODUCT</h1>
        </div>
        <Best></Best>
        <Button variant="primary" style={buttonStyle3} onClick={() => { }}>전체보기</Button>
      </Container>

      {/* 수원FC 소식 카드*/}
      <div className="card_wrap">
        <div className='card_list'>
          <Card>
            <Card.Img variant="top" src='/img/card_1.jpg' className='card_img' />
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

          <Card>
            <Card.Img variant="top" src='/img/card_2.jpg' className='card_img' />
            <Card.Body>
              <Card.Title style={card_text_one}>소지품 검사 강화 안내</Card.Title>
              <Card.Text style={card_text_two}>
                안전한 경기 관람을 위해 입장 게이트에서 소지품 검사가 강화됩니다.
                안전하고 성숙한 관람 문화를 위해 팬 여러분들의 협조 부탁드립니다.
              </Card.Text>
              <Button variant="primary" style={buttonStyle2}>더보기</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src='/img/card_3.jpg' className='card_img' />
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

          <Card>
            <Card.Img variant="top" src='/img/card_4.jpg' className='card_img' />
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

      {/* 제품 */}
      <Title></Title>
      <div className='button_box'>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton id="tbg-radio-1" style={buttonStyle} value={1} onClick={() => {
            let copy = [...origin]
            setGoods(copy);
          }}>전체
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" style={buttonStyle} value={2} onClick={() => {
            let copy = [...origin].filter(goods => goods.content === 'a')
            setGoods(copy);
          }}>
            유니폼
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" style={buttonStyle} value={3} onClick={() => {
            let copy = [...origin].filter(goods => goods.content === 'b')
            setGoods(copy);
          }}>구단용품
          </ToggleButton>
          <ToggleButton id="tbg-radio-4" style={buttonStyle} value={3} onClick={() => {
            let copy = [...origin].filter(goods => goods.content === 'c')
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

      <Container>
        <Row>
          {
            more.map((a, i) => {
              <More more={more[i]} key={i}></More>
            })
          }
        </Row>
      </Container>

      <Button variant="primary" style={buttonStyle3} onClick={() => {
        if (count === 1) {
          axios.get("https://cyh272036.github.io/suwonfc_data/data2.js").then((data2) => {
            let copy = [...more, data2.data];
            console.log(copy)
            setMore(copy);
            setCount(2);
          })
        } else if (count === 2) {
          axios.get("https://cyh272036.github.io/suwonfc_data/data3.js").then((data3) => {
            let copy = [...more, ...data3.data];
            setMore(copy);
            setCount(3);
          })
        } else {
          alert("더이상 상품이 없습니다")
        }
      }}> + 3개 상품 더보기</Button>


      {/* 베너 */}
      <div className='banner'>
      </div>

      {/* 인스타 */}
      <Container>
        <div className='insta_title'>
          <h1><span>SUWONFC </span>INSTAGRAM</h1>
        </div>
        <Button variant="primary" style={buttonStyle3} onClick={() => { }}>Go to SuwonFC</Button>
        <Instagram></Instagram>
      </Container>

      {/* footer */}
      <Footer></Footer>
    </>
  )
}

export default Home