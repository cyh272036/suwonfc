import React, { useState } from 'react'
import { Container, Row, Carousel, Card, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import Product from './Product';
import Title from './Title';
import data2 from '../data2';

const Home = (props) => {
  let { goods, setGoods, origin } = props;

  let buttonStyle = {
    backgroundColor: '#0B1648',
    border: 'none',
    fontFamily: 'pretendard',
    padding: '20px 40px'
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

      <div className='we'>
        <div className="we_headline">

        </div>
        <div className="we_text">

        </div>
      </div>

      <div className="card_wrap">
        <div className='card_list'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/img/card_1.jpg' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/img/card_2.jpg' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/img/card_3.jpg' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='/img/card_4.jpg' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
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

    </>
  )
}

export default Home