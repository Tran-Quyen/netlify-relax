import 'animate.css';
import React, { useEffect, useRef } from 'react';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import singers from '../../assets/images/singers.png';
import tiktok_logo from '../../assets/images/tiktok-logo.png';
import podcast from '../../assets/images/podcast.png';

import hoa_hanna from '../../assets/videos/hoahana.mp4';
import hot_hot_girl from '../../assets/videos/hot hot girl.mp4';

import Button from '../Button';
import Grid from '../Grid';
// Import Swiper styles
import './swiper-slider.scss';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function SwiperSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current &&
      swiperRef.current.addEventListener('mousemove', () => {
        swiperRef.current.swiper.autoplay.stop();
      });
    swiperRef.current &&
      swiperRef.current.addEventListener('mouseleave', () => {
        swiperRef.current.swiper.autoplay.start();
      });
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
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
                  <span className="swiper-slide__item--txt tiktok">
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
                <Button type="hover--outline">Tik Tok Trends</Button>
              </div>
              <div className="swiper-slide__item--video">
                <video
                  src={hot_hot_girl}
                  width="40%"
                  muted="muted"
                  autoPlay
                  loop
                  className="swiper-slide__item--video1"
                />
                <video
                  src={hoa_hanna}
                  width="40%"
                  muted="muted"
                  autoPlay
                  loop
                  className="swiper-slide__item--video2"
                />
              </div>
            </Grid>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide__item">
            <Grid gap={30} col={2}>
              <div className="swiper-slide__item--content">
                <div className="swiper-slide__item--title">
                  <span className="swiper-slide__item--txt musics">
                    Music helps us relax, let's listen to exciting music right
                    now
                  </span>
                </div>
                <div className="swiper-slide__item--desc">
                  Relax is a place where we can search and enjoy the hottest and
                  trending music on many platforms and genres
                </div>
                <Button type="hover--outline">Music Trends</Button>
              </div>
              <div className="swiper-slide__item--image">
                <img src={singers} alt="" />
              </div>
            </Grid>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide__item">
            <Grid gap={30} col={2}>
              <div className="swiper-slide__item--content">
                <div className="swiper-slide__item--title">
                  <span className="swiper-slide__item--txt podcast">
                    How is your day going? If you are happy or sad, share it
                    with PodCast !
                  </span>
                </div>
                <div className="swiper-slide__item--desc">
                  if you're sad - let the podcast make you happy, if you're
                  happy - share it with everyone
                </div>
                <Button type="hover--outline">Podcast</Button>
              </div>
              <div className="swiper-slide__item--image">
                <img src={podcast} alt="" />
              </div>
            </Grid>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
