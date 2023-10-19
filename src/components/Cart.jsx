import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, minCount, removeProduct } from '../store'; // 액션 임포트 경로에 맞게 수정하세요
import { Button, Container, Table, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Cart = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const buttonStyle = {
    border: '1px solid #eee',
    backgroundColor: 'transparent',
    margin: '0 10px',
  };

  // Redux 상태에서 장바구니 정보 가져오기
  const cartItems = useSelector((state) => state.cart);

  // 총합을 계산하는 함수 (배송비 제외)
  const calculateSubtotal = (items) => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i].count * items[i].price;
    }
    return sum;
  };

  // 배송비
  const shippingCost = 3000;

  // 총합 (배송비 포함) 계산 함수
  const calculateTotal = (subtotal, shipping) => {
    return subtotal + shipping;
  };

  const subtotal = calculateSubtotal(cartItems);

  // 제품 삭제를 확인하고 처리하는 함수
  const removeProductHandler = (productId) => {
    const confirmed = window.confirm('상품을 삭제하시겠습니까?');
    if (confirmed) {
      dispatch(removeProduct(productId));
    }
  };

  return (
    <>
      <Container style={{ paddingTop: '200px' }}>
        <Table>
          <thead>
            <tr>
              <th>이미지</th>
              <th>상품명</th>
              <th>사이즈</th>
              <th>등번호</th>
              <th>가격</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((v, i) => (
              <tr key={i}>
                <td>
                  <img src={v.img} style={{ width: '60px' }} alt={v.name} />
                </td>
                <td>{v.name}</td>
                <td>{v.size}</td>
                <td>{v.number}</td>
                <td>{v.price}</td>
                <td>
                  <button
                    style={buttonStyle}
                    onClick={() => {
                      dispatch(addCount(v.id));
                    }}
                  >
                    +
                  </button>
                  {v.count}
                  <button
                    style={buttonStyle}
                    onClick={() => {
                      if (v.count === 1) {
                        removeProductHandler(v.id);
                      } else {
                        dispatch(minCount(v.id));
                      }
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center">
          <Button
            variant="outline-primary"
            className="mx-1"
            style={{ backgroundColor: '#0B1648', border: 'none', color: '#fff' }}
          >
            상품더보기
          </Button>
          <Button
            variant="outline-primary"
            className="mx-1"
            style={{ border: '1px solid #c0c0c0', color: '#000' }}
          >
            이름순정렬
          </Button>
        </div>
        <Alert
          style={{
            backgroundColor: '#eee',
            border: 'none',
            color: '#000',
            marginTop: '20px',
          }}
        >
          <Alert.Heading>장바구니</Alert.Heading>
          <hr />
          <p>
            {`총합 : ${subtotal} + ${shippingCost}(배송비) = ${calculateTotal(subtotal, shippingCost)} 원`}
          </p>
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                navigator('/my');
              }}
              style={{ backgroundColor: '#0B1648', border: 'none', color: '#fff' }}
            >
              결제하기
            </Button>
          </div>
        </Alert>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
