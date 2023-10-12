import { useState } from 'react';
import { Container, Row, Carousel, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import axios from 'axios';
import Product from './Product';
import Title from './Title';
import Instagram from './Instagram';
import Best from './Best';
import About from './About';
import Footer from './Footer';
import data from '../data';
import Notice from './Notice';
import More from './More';

const Home = (props) => {

  let { goods, setGoods } = props;
  let origin = data;
  let [more, setMore] = useState(data);
  let [count, setCount] = useState(1);

  console.log(more)

  //
  let buttonStyle = {
    backgroundColor: '#0B1648',
    border: 'none',
    fontFamily: 'pretendard',
    padding: '20px 40px'
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
          <img src='/img/slide.jpg' alt='slideimg' style={{ backgroundPosition: 'center' }}></img>
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
      <Best></Best>

      {/* 수원FC 소식 카드*/}
      <Notice></Notice>

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

      {/* <Container style={{ marginTop: '80px' }}>
        <Row>
          {
            goods.map((a, i) => {
              return (
                <Product goods={goods[i]} key={i}></Product>
              )
            })
          }
        </Row>
      </Container> */}

      <Container style={{ marginTop: '80px' }}>
        <Row>
          {more.map((a, i) => (
            <More more={more[i]} key={i}></More>
          ))}
        </Row>
      </Container>

      <Button variant="primary" style={buttonStyle3} onClick={() => {
        if (count === 1) {
          axios.get("https://cyh272036.github.io/suwonfc_data/data2.json").then((data2) => {
            let copy = [...more, ...data2.data];
            setMore(copy);
            console.log(more);
            setCount(2);
          })
        } else if (count === 2) {
          axios.get("https://cyh272036.github.io/suwonfc_data/data3.json").then((data3) => {
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
      <Instagram></Instagram>

      {/* footer */}
      <Footer></Footer>
    </>
  )
}

export default Home