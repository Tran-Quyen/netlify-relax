import React from 'react';
import Routers from '../../config/Routers';
import TopMenu from '../TopMenu';

const MainContent = () => {
  return (
    <div className="main">
      <TopMenu />
      <Routers />
    </div>
  );
};

export default MainContent;
