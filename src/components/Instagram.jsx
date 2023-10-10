import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
const Instagram = () => {
  return (
    <>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation = {true}
      modules={[Pagination, Navigation]}
      className="Swiper"
    >
      <SwiperSlide>
        <img src="./img/insta_1.jpg" alt="instagram" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="./img/insta_2.jpg" alt="instagram" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="./img/insta_3.jpg" alt="instagram" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="./img/insta_4.jpg" alt="instagram" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="./img/insta_5.jpg" alt="instagram" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="./img/insta_6.jpg" alt="instagram" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="./img/insta_7.jpg" alt="instagram" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="./img/insta_8.jpg" alt="instagram" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="./img/insta_9.jpg" alt="instagram" />
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Instagram