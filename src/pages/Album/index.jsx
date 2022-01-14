import React from 'react';
import { Outlet } from 'react-router-dom';
import Helmet from '../../components/Helmet';
import Section from '../../components/Section';
import Title from '../../components/Title';
import AlbumList from './component/AlbumList';

const Album = () => {
  return (
    <Helmet title="Album">
      <div className="container">
        <Title title="Photos Album" />
        <Section>
          <AlbumList />
        </Section>
        <Section>
          <Outlet />
        </Section>
      </div>
    </Helmet>
  );
};

export default Album;
