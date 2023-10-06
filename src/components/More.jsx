import React from 'react'
import { Col } from 'react-bootstrap'

const More = (props) => {
    const { more } = props
    return (
        <Col md={4}>
            <img src={more.imgUrl} width="100%" alt='moreImg' style={{ border: '1px solid #eee' }} />
            <h4>{more.title}</h4>
            <p>{more.price}원</p>
        </Col>
    )
}

export default More