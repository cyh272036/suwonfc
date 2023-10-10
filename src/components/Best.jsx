// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Best = () => {
  return (
    <>
    <Swiper 
      slidesPerView={3}
      spaceBetween={15}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      navigation = {true}
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
  </>
  )
}

export default Best