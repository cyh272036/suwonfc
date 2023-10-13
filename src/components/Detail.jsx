import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Card, Nav, TabContent } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  let { goods } = props;
  let { id } = useParams();
  let [tab, setTab] = useState(0);

  //사이즈
  const selectList = ["3S(75)", "2S(80)", "S(85)", "M(90)", "L(95)", "XL(100)", "2XL(105)", "3XL(110)"];
  //선수번호
  const selectListTwo = [
    "2. 정동호(+15,000원)",
    "3. 박철우(+15,000원)",
    "5. 잭슨(+15,000원)",
    "7. 김현(+15,000원)",
    "8. 정재용(+15,000원)",
    "10. 로페즈(+15,000원)",
    "11. 이승우(+15,000원)",
    "13. 오인표(+15,000원)",
    "14. 윤빛가람(+15,000원)",
    "15. 이재성(+15,000원)",
    "16. 정재윤(+15,000원)",
    "18. 양동현(+15,000원)",
    "19. 김규형(+15,000원)",
    "20. 황순민(+15,000원)",
    "21. 최보경(+15,000원)",
    "22. 이광혁(+15,000원)",
    "24. 김주영(+15,000원)",
    "25. 고메즈(+15,000원)",
    "27. 이태섭(+15,000원)",
    "28. 이영재(+15,000원)",
    "29. 장재웅(+15,000원)",
    "30. 신세계(+15,000원)",
    "32. 곽동준(+15,000원)",
    "34. 김예성(+15,000원)",
    "35. 서승우(+15,000원)",
    "37. 바우테르손(+15,000원)",
    "55. 김선민(+15,000원)",
    "66. 박병현(+15,000원)",
    "77. 정은우(+15,000원)",
    "88. 이용(+15,000원)",
    "89. 안치우(+15,000원)",
    "91. 김재현(+15,000원)",
    "96. 강민성(+15,000원)"
  ];

  const [Selected, setSelected] = useState({ size: "" });

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <Container className='detail'>
      <Row>
        <Col md={6}>
          <img src={'../img/goods_' + (Number(id) + 1) + '.png'} width="100%" alt='detail'></img>
        </Col>
        <Col md={6}>

          <Card body style={{ border: 'none' }}>
            <h2>{goods[id].title}</h2>
            <h4>{goods[id].price}원</h4>
          </Card>

          <Card body style={{ border: 'none' }}><h6>* 마킹된 유니폼은 환불이 불가합니다.</h6></Card>
          <Card body style={{ border: 'none' }}>
            <h6>* 유니폼 가격 정보</h6>
            <span>- 레플리카 : 80,000원</span>
          </Card>

          <Card body style={{ border: 'none' }}>
            <h6>* 마킹 가격</h6>
            <span>- 후면 마킹 : 15,000원<br></br>
              - 리그 패치 : 13,000원</span>
          </Card>

          <Card body style={{ border: 'none' }}>
            <h6>* 마킹 안내</h6>
            <span>- 선수의 이름, 번호 마킹 희망시 하단 선수정보 참조 (커스텀 마킹 불가)<br></br>
              - 별도 마킹 없을시 "마킹없음" 선택</span>
          </Card>

          <Card body style={{ border: 'none' }}>
            <h6>* 배송</h6>
            <span>- 판매 페이지 내 배송 일정 참고</span>
          </Card>

          <Card body style={{ border: 'none' }}>
            <h6>* 배송비</h6>
            <span>- 3,000원<br></br>
              - 제주 3,500원 / 그 외 도서 산간 4,000원 추가</span>
          </Card>

          <Card style={{ border: 'none' }}>
            <h6>사이즈</h6>
            <select onChange={handleSelect} value={Selected} className="size">
              {selectList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </Card>

          <Card style={{ border: 'none' }}>
            <h6>선수 이름 번호 선택</h6>
            <select onChange={handleSelect} value={Selected} className="size">
              {selectListTwo.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </Card>


          <Button variant='danger'>주문하기</Button>
        </Col>
      </Row>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">상세정보</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">환불 및 배송정보</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab}></TabContent>
    </Container>


  )
}

export default Detail