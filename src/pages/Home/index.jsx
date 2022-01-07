import React from 'react';
import Helmet from '../../components/Helmet';
import Section from '../../components/Section';
import SwiperSlider from '../../components/SwiperSlider';

const Home = () => {
  return (
    <Helmet title="Home">
      <div className="home">
        <div className="container">
          <Section>
            <SwiperSlider />
          </Section>
        </div>
      </div>
    </Helmet>
  );
};

export default Home;
