import React from 'react'
import { Col } from 'react-bootstrap'

const More = (props) => {
    const { title, price,imgUrl } = props.more
    return (
        <Col md={4}>
            <img src={imgUrl} width="100%" alt='moreImg' style={{ border: '1px solid #eee' }} />
            <h4>{title}</h4>
            <p>{price}원</p>
        </Col>
    )
}

export default More