import React from 'react';
import tiktokList from '../../assets/fake-data/tiktokList';
import Helmet from '../../components/Helmet';
import Section from '../../components/Section';
import Title from '../../components/Title';
import GoToTop from './components/GoToTop';
import TikTokList from './components/TikTokList';
import './tiktok.scss';

const TikTok = () => {
  return (
    <Helmet title="TikTok Trend">
      <GoToTop />
      <div className="tiktok">
        <div className="container">
          <Title title="TikTok Trend" />
          <Section>
            <TikTokList tiktokList={tiktokList} />
          </Section>
        </div>
      </div>
    </Helmet>
  );
};

export default TikTok;
