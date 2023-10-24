import React from 'react'
import { Col, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductTwo = (props) => {
    let navigate = useNavigate();
    let {product, i} = props;

    let text_one = {
      marginTop: '10px',
      fontFamily: 'pretendard',
      fontSize: '1.1rem',
      fontWeight: 500,
      color: "#000",
      textAlign: 'left'
  }

  let text_two = {
      fontFamily: 'pretendard',
      fontSize: '1rem',
      fontWeight: 300,
      paddingBottom: '30px',
      marginTop: '-5px',
      color: "#000",
      textAlign: 'left'
  }
    
  return (
    <Col md={6} lg={4}>
    <Nav.Link onClick={() => 
    navigate('/detail/' + product.id)}>
    <img src={process.env.PUBLIC_URL + product.imgUrl} width="100%" alt='item' style={{border: '1px solid #eee'}}/>
    <h4 style={text_one}>{product.title}</h4>
    <p style={text_two}>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
    </Nav.Link>
</Col>
  )
}

export default ProductTwo