import React from 'react';
import tiktokList from '../../assets/fake-data/tiktokList';
import Helmet from '../../components/Helmet';
import Section from '../../components/Section';
import SwiperSlider from '../../components/SwiperSlider';
import Title from '../../components/Title';
import BestSong from '../Music/components/BestSong';
import GoToTop from '../TikTok/components/GoToTop';
import TikTokList from '../TikTok/components/TikTokList';

const Home = () => {
  return (
    <Helmet title="Home">
      <div className="home">
        <GoToTop />
        <div className="container">
          <Section>
            <SwiperSlider />
          </Section>
          <Section>
            <Title title="TikTok Trend" />
          </Section>
          <TikTokList tiktokList={tiktokList.slice(0, 5) || []} />
          <Section>
            <Title title="Top Music" />
          </Section>
          <BestSong />
        </div>
      </div>
    </Helmet>
  );
};

export default Home;
