import React, { useRef } from 'react';
import { Container, Button } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
let url = "https://www.youtube.com/@TheSuwonFC/videos"

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

const Video = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (

        <Container className='video'>
            <div className='insta_title'>
                <h1>SUWON FC <span>YOUTUBE</span></h1>
                <p>수원FC 공식 영상을 유튜브를 통해 만나보세요</p>
            </div>
            <Button variant="primary" style={buttonStyle3} onClick={() => { window.open(url) }}>Go to Youtube</Button>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={'fade'}
                navigation={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="VideoSwiper"
            >
                <SwiperSlide>
                    <video muted autoPlay loop>
                        <source src="/videos/EP.13.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <video muted autoPlay loop>
                        <source src="/videos/EP.14.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <video muted autoPlay loop>
                        <source src="/videos/EP.15.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <video muted autoPlay loop>
                        <source src="/videos/EP.16.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>

        </Container>
    )
}

export default Video