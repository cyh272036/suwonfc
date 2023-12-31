import React from 'react'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const More = (props) => {

    let navigator = useNavigate();
    const { title, price, imgUrl } = props.more

    let text_one = {
        marginTop: '10px',
        fontFamily: 'pretendard',
        fontSize: '1.3rem',
        fontWeight: 700,
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
            <img src={process.env.PUBLIC_URL + imgUrl} width="100%" alt='moreImg' style={{ border: '1px solid #eee', cursor:'pointer' }} onClick={() => {
                navigator('/detail/0')
            }}/>
            <h4 style={text_one}>{title}</h4>
            <p style={text_two}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
        </Col>

    )
}

export default More