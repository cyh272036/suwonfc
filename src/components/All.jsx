import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import Footer from './Footer'
import ProductTwo from './ProductTwo'


const All = (props) => {
    let { product, setProduct } = props;
    
    return (
        <>
            <Container style={{ paddingTop: '50px', textAlign: 'center', wordBreak: 'keep-all' }}>
                <div className='insta_title' style={{marginBottom: '80px'}}>
                    <h1>전체상품</h1>
                    <p>수원FC 공식 온라인몰에서 다양한 상품을 만나보세요</p>
                </div>

                <Row>
                    {product.map((a, i) => (
                        <ProductTwo product={product[i]} key={i}></ProductTwo>
                    ))}
                </Row>

            </Container>

            <Footer></Footer>
        </>
    )
}

export default All