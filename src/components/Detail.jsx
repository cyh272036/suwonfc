import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Tab, Tabs, Form, InputGroup, FormControl } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import { addItem } from "../store";
import { useDispatch } from "react-redux";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Detail = (props) => {
  let { goods } = props;
  let { id } = useParams();
  let selproduct = goods.find(x => x.id == id);
  let dispatch = useDispatch();

  const navigator = useNavigate();

  let recomend = {
    position: 'relative',
    top: '200px',
  }

  //사이즈
  const selectList = ["선택하세요.", "3S(75)", "2S(80)", "S(85)", "M(90)", "L(95)", "XL(100)", "2XL(105)", "3XL(110)"];
  //선수번호
  const selectListTwo = [
    "선택하세요.",
    "없음",
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

  const [selected, setSelected] = useState({ size: "", number: "", additionalCost: 0 });

  const handleSelectSize = (e) => {
    setSelected({ ...selected, size: e.target.value });
  };

  const handleSelectNum = (e) => {
    let additionalCost = 0;

    if (e.target.value !== "없음") {
      additionalCost = 15000;
    }

    setTotalCost((selproduct.price + additionalCost) * call)
    setSelected({ ...selected, number: e.target.value, additionalCost });
  }

  let [call, setCall] = useState(1);
  let [totalCost, setTotalCost] = useState(selproduct.price)
  useEffect(() => {
  }, [totalCost])


  return (
    <>
      <Container className='detail'>
        <Row>
          <Col md={6} style={{ marginBottom: '50px' }}>
            <img src={selproduct.imgUrl} width="100%" alt='detail'></img>
          </Col>

          <Col md={6} style={{ paddingLeft: '30px' }}>
            <Card style={{ border: 'none', marginBottom: '25px' }}>
              <h2>{selproduct.title}</h2>
              <h4>{selproduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h4>
            </Card>

            {/* 유니폼 (content,a) 일때만 보이게 */}
            {selproduct.content === 'a' &&
              <>
                <Card style={{ border: 'none', marginBottom: '15px' }}><h6>* 마킹된 유니폼은 환불이 불가합니다.</h6></Card>
                <Card style={{ border: 'none', marginBottom: '15px' }}>
                  <h6>* 유니폼 가격 정보</h6>
                  <span>- 레플리카 : 80,000원</span>
                </Card>

                <Card style={{ border: 'none', marginBottom: '15px' }}>
                  <h6>* 마킹 가격</h6>
                  <span>- 후면 마킹 : 15,000원<br></br>
                    - 리그 패치 : 13,000원</span>
                </Card>

                <Card style={{ border: 'none', marginBottom: '15px' }}>
                  <h6>* 마킹 안내</h6>
                  <span>- 선수의 이름, 번호 마킹 희망시 하단 선수정보 참조 (커스텀 마킹 불가)<br></br>
                    - 별도 마킹 없을시 "없음" 선택</span>
                </Card>
              </>
            }

            {/* 공통으로 보이는 부분 */}
            <Card style={{ border: 'none', marginBottom: '15px' }}>
              <h6>* 배송</h6>
              <span>- 판매 페이지 내 배송 일정 참고</span>
            </Card>

            <Card style={{ border: 'none', marginBottom: '20px' }}>
              <h6>* 배송비</h6>
              <span>- 3,000원<br></br>
                - 제주 3,500원 / 그 외 도서 산간 4,000원 추가</span>
            </Card>

            {/* 유니폼 (content,a) 일때만 보이게 */}
            {selproduct.content === 'a' &&
              <>
                <Card style={{ border: 'none' }}>
                  <h6>사이즈</h6>
                  <select
                    onChange={handleSelectSize}
                    name="size"
                    value={selected.size}
                    className="size"
                  >
                    {selectList.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Card>

                <Card style={{ border: 'none' }}>
                  <h6>선수 이름 번호 선택</h6>
                  <select onChange={handleSelectNum}
                    name="number"
                    value={selected.number}
                    className="size"
                  >
                    {selectListTwo.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Card>

                {/* <p>{Selected.size}  {Selected.number}</p> */}
              </>
            }

            {/* 유니폼 외 티셔츠 사이즈 옵션 */}
            {selproduct.only === 'size' &&
              <Form>
                <Card style={{ border: 'none' }}>
                  <h6>사이즈</h6>
                  <select onChange={handleSelectSize}
                    name="size"
                    value={selected.size}
                    className="size"
                  >
                    {selectList.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Card>
              </Form>
            }


              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  주문 개수
                </InputGroup.Text>
                <FormControl
                  onChange={(e) => {
                    setCall(e.target.value);
                    setTotalCost((selproduct.price + selected.additionalCost) * e.target.value)
                  }}
                  value={call}
                  type='number'
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>


            {/* 장바구니, 구매버튼 */}
            <p>총 가격 : {totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
            <Button variant='light' style={{ border: '1px solid #eee', marginRight: '10px', width: '100px', height: '50px' }} onClick={() => {
              navigator('/my')
            }}>주문하기</Button>
            <Button
              style={{ width: '100px', height: '50px', border: '1px solid #eee', textAlign: 'center', backgroundColor: "#0B1648", border: "none" }}
              onClick={() => {
                const basicCost = selproduct.price + selected.additionalCost
                // const totalCost = (selproduct.price + selected.additionalCost)*call;
                dispatch(addItem({
                  id: selproduct.id,
                  img: selproduct.imgUrl,
                  name: selproduct.title,
                  basicprice: basicCost,
                  price: totalCost,
                  count: call,
                  ...selected
                }));
                navigator('/cart')
              }}>장바구니</Button>
          </Col>
        </Row>


        {/* 상세정보 설명 */}

        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
          style={{ marginTop: '100px' }}
        >
          <Tab eventKey="home" title="상세정보">
            <Card style={{ border: 'none', paddingTop: '30px', width: '80%', margin: '0 auto' }}>
              <img src="../img/more.jpg" alt="more" />
              <img src="../img/more2.jpg" alt="more" />
            </Card>
          </Tab>

          <Tab eventKey="profile" title="배송 및 환불규정">
            <Card style={{ border: 'none', paddingTop: '30px', width: '80%', margin: '0 auto' }}>
              <h4 style={{ fontWeight: '700', marginTop: '30px', fontSize: '20px' }}>배송안내</h4>
              <span style={{ marginBottom: '5px' }}>- 기본배송료는 3,000원 입니다. (도서,산간,오지 일부지역은 배송비가 추가될 수 있습니다.)</span>
              <span>- 상품의 평균 배송일은 2~3일 정도 소요됩니다. 유니폼 마킹 및 커스텀이 추가되는 상품은 배송이 늦어질 수 있습니다.</span>
              <span>(해당 상품별 별도 배송일 표기)</span>
            </Card>

            <Card style={{ border: 'none', paddingTop: '30px', width: '80%', margin: '0 auto' }}>
              <h4 style={{ fontWeight: '700', marginTop: '30px', fontSize: '20px' }}>교환 및 반품안내</h4>
              <span style={{ marginBottom: '5px' }}>- 고객 변심에 의한 교환 및 반품은 고객께서 배송비를 부담하셔야 교환이 가능합니다.</span>
              <span style={{ marginBottom: '5px' }}>- 고객 책임으로 인한 상품 훼손의 경우 교환 및 환불이 불가 합니다.</span>
              <span style={{ marginBottom: '5px' }}>- 상품 교환 가능기간은 상품 수령일로 부터 7일 이내 입니다.</span>
              <span>- 교환 및 반품 문의 : 02-3461-0527 (주)코어커뮤니케이션</span>
            </Card>
          </Tab>
        </Tabs>
      </Container>

      {/*  */}
      <Container style={recomend}>
        <div className='insta_title'>
          <h1>SUWON FC <span>PICK</span></h1>
          <p>수원FC가 직접 추천하는 상품들</p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            // when window width is >= 320px
            270: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="DetailSwiper"
        >
          <SwiperSlide>
            <img src="/img/goods_5.png" alt="goods" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/goods_4.png" alt="instagram" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/best4.png" alt="instagram" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/goods_13.png" alt="instagram" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/goods_7.png" alt="instagram" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/goods_17.png" alt="instagram" />
          </SwiperSlide>
        </Swiper>
      </Container>

      <Footer></Footer>

    </>


  )
}

export default Detail