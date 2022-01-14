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
import hoa_hanna from '../../assets/videos/hoahana.mp4';
import hot_hot_girl from '../../assets/videos/hot hot girl.mp4';
import girl from '../../assets/images/girl.jpg';
import Button from '../Button';
// Import Swiper styles
import './swiper-slider.scss';
import { useNavigate } from 'react-router-dom';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function SwiperSlider() {
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const handleClickTikTokBtn = () => {
    navigate('./tiktok');
  };

  const handleClickMusicBtn = () => {
    navigate('./music');
  };

  const handleClickAlbumBtn = () => {
    navigate('./album');
  };

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
              <Button onClick={handleClickTikTokBtn} type="hover--outline">
                Tik Tok Trends
              </Button>
            </div>
            <div className="swiper-slide__item--video">
              <video
                src={hot_hot_girl}
                muted="muted"
                autoPlay
                loop
                className="swiper-slide__item--video1"
              />
              <video
                src={hoa_hanna}
                muted="muted"
                autoPlay
                loop
                className="swiper-slide__item--video2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide__item">
            <div className="swiper-slide__item--content">
              <div className="swiper-slide__item--title">
                <span className="swiper-slide__item--txt musics">
                  Music helps us relax, let's listen to exciting music right now
                </span>
              </div>
              <div className="swiper-slide__item--desc">
                Relax is a place where we can search and enjoy the hottest and
                trending music on many platforms and genres
              </div>
              <Button onClick={handleClickMusicBtn} type="hover--outline">
                Music Trends
              </Button>
            </div>
            <div className="swiper-slide__item--image">
              <img src={singers} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide__item">
            <div className="swiper-slide__item--content">
              <div className="swiper-slide__item--title">
                <span className="swiper-slide__item--txt album">
                  Photos album - collection of interesting topics in life
                </span>
              </div>
              <div className="swiper-slide__item--desc">
                if you're sad - let the albums photos make you happy, if you're
                happy - share it with everyone
              </div>
              <Button onClick={handleClickAlbumBtn} type="hover--outline">
                Albums Photos
              </Button>
            </div>
            <div className="swiper-slide__item--image">
              <img src={girl} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
