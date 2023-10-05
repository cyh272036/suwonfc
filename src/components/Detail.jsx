import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  let {goods} = props;
  let {id} = useParams();

  return (
    <Container>
        <Row>
            <Col md={6}>
                <img src={'../img/goods_' + (Number(id) + 1) + '.png'} width="100%"></img>
            </Col>
            <Col md={6}>
                <h4 className='pt-5'>{goods[id].title}</h4>
                <p>{goods[id].content}</p>
                <p>{goods[id].price}</p>
                <Button variant='danger'>주문하기</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Detail