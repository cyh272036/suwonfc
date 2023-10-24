import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Container } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
let url = "https://www.instagram.com/suwonfc/"

let buttonStyle3 = {
  backgroundColor: '#0B1648',
  border: 'none',
  fontFamily: 'pretendard',
  fontSize: '1.2rem',
  padding: '15px 30px',
  position: 'relative',
  left: '50%',
  transform: 'translate(-50%,0)',
  marginTop: '10px'
}

const Instagram = () => {
  return (
    <div>
      <div className='insta_title'>
        <h1>SUWON FC  <span>INSTAGRAM</span></h1>
        <p>수원FC 공식 인스타그램을 통해 다양한 소식을 만나보세요</p>
      </div>
      <Button variant="primary" style={buttonStyle3} onClick={() => { window.open(url) }}>Go to SuwonFC</Button>
      <Container>
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
        className="Swiper"
      >
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/img/insta1.jpg"} alt="instagram" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + "/img/insta2.jpg"} alt="instagram" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + "/img/insta3.jpg"} alt="instagram" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + "/img/insta4.jpg"} alt="instagram" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + "/img/insta5.jpg"} alt="instagram" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + "/img/insta6.jpg"} alt="instagram" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + "/img/insta7.jpg"} alt="instagram" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + "/img/insta8.jpg"} alt="instagram" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + "/img/insta9.jpg"} alt="instagram" />
        </SwiperSlide>
      </Swiper>
      </Container>
    </div>
  )
}

export default Instagram