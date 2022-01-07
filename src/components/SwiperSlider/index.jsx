import React, { useRef } from 'react';
import tiktok_logo from '../../assets/images/tiktok-logo.png';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import './swiper-slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Grid from '../Grid';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function SwiperSlider() {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide__item">
            <Grid gap={30} col={2}>
              <div className="swiper-slide__item--content">
                <div className="swiper-slide__item--title">
                  <span className="swiper-slide__item--txt">
                    summarizing the latest tik tok trend
                  </span>
                  <span className="swiper-slide__item--img">
                    <img src={tiktok_logo} alt="" />
                  </span>
                </div>
                <div className="swiper-slide__item--desc">
                  This is the place to create challenges, funny stories,exciting
                  dances that will help you have a fresher day !!!
                </div>
              </div>
              <div className="swiper-slide__item--video">
                <video width="100%" height="100%" autoPlay>
                  <source src="movie.mp4" type="video/mp4" />
                  <source src="movie.ogg" type="video/ogg" />
                </video>
              </div>
            </Grid>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
