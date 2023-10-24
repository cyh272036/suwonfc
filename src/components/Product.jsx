import React from 'react'
import { Col, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    let navigate = useNavigate();
    let {goods, i} = props;
    
    let text_one = {
        marginTop: '10px',
        fontFamily: 'pretendard',
        fontSize: '1.3rem',
        fontWeight: 800,
        color: "#000",
    }

    let text_two = {
        fontFamily: 'pretendard',
        fontSize: '1.1rem',
        fontWeight: 300,
        paddingBottom: '30px',
        marginTop: '-5px',
        color: "#000"
    }

    return (
        <Col md={6} lg={4}>
            <Nav.Link onClick={() => 
            navigate('/detail/' + goods.id)}>
            <img src={process.env.PUBLIC_URL + goods.imgUrl} width="100%" alt='item' style={{border: '1px solid #eee'}}/>
            <h4 style={text_one}>{goods.title}</h4>
            <p style={text_two}>{goods.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
            </Nav.Link>
        </Col>
    )
}

export default Product