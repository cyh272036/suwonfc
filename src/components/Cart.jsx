import React, { useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { addCount, minCount, removeProduct, sortName } from '../store';
import { Button, Container, Table, Alert, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import data2 from '../data2';
import More from './More';
import Footer from './Footer';

const Cart = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const buttonStyle = {
    border: 'none',
    backgroundColor: '#0B1648',
    color: '#fff',
    margin: '0 10px',
    height: '30px',
    width: '30px',
    lineHeight: '10px',
    fontSize: '16px'
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

  let [more, setMore] = useState(data2);
  let [count, setCount] = useState(1);

  let buttonStyle3 = {
    backgroundColor: '#0B1648',
    border: 'none',
    fontFamily: 'pretendard',
    fontSize: '1.2rem',
    padding: '15px 30px',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%,0)',
    marginTop: '30px',
  }

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
                  <img src={v.img} style={{ width: '100px', border: '1px solid #eee' }} alt={v.name} />
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
            onClick={() => {
              dispatch(sortName())
            }}
          >가격순정렬
          </Button>
        </div>

         {/* only  New(more) */}
      <div className='insta_title'>
        <h1>ONLINE <span>ONLY</span></h1>
        <p>수원FC 공식 온라인몰에서만 만나볼 수 있는 제품들</p>
      </div>

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
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
