// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Best = () => {

  let buttonStyle3 = {
    backgroundColor: '#0B1648',
    border: 'none',
    fontFamily: 'pretendard',
    fontSize: '1.2rem',
    padding: '15px 30px',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%,0)',
    marginTop: '30px'
  }

  return (
    <>
      <div className='insta_title'>
        <h1><span>BEST </span>PRODUCT</h1>
        <p>수원FC 팬들에게 가장 사랑받고 있는 제품들</p>
      </div>
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        centeredSlides={true}
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
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='best'>
          <img src="./img/best.jpg" alt="best" />
          <div className='best_text'>
            <h3>2023 수원FC 레트로 레플리카 유니폼</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className='best'>
          <img src="./img/best2.png" alt="best" />
          <div className='best_text'>
            <h3>'우리승우' 캐릭터 젤리 휴대폰 케이스</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className='best'>
          <img src="./img/best3.jpg" alt="best" />
          <div className='best_text'>
            <h3>수원FC 휴대폰 스트랩</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className='best'>
          <img src="./img/best4.png" alt="best" />
          <div className='best_text'>
            <h3>2023 수원FC HOME 레플리카 유니폼</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className='best'>
          <img src="./img/best5.jpg" alt="best" />
          <div className='best_text'>
            <h3>수원FC 리무버블 스티커 6종</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className='best'>
          <img src="./img/best6.jpg" alt="best" />
          <div className='best_text'>
            <h3>2022 수원FC/W THIRD 레플리카 유니폼</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className='best'>
          <img src="./img/best7.jpg" alt="best" />
          <div className='best_text'>
            <h3>2022 수원FC/W HOME 레플리카 유니폼</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide className='best'>
          <img src="./img/best8.png" alt="best" />
          <div className='best_text'>
            <h3>수원FC 20주년 전사머플러 (블루골드)</h3>
          </div>
        </SwiperSlide>
      </Swiper>
      </Container>

      <Link to="./all">
        <Button variant="primary" style={buttonStyle3}>전체보기</Button>
      </Link>
    </>
  )
}

export default Best