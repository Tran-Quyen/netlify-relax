import React, { useState } from 'react';
import TopMenuHead from './components/TopMenuHead';
import TopMenuMid from './components/TopMenuMid';
import './top-menu.scss';

const musicMenu = [
  { display_name: 'Best song', path: '/best-song' },
  { display_name: 'Trend best views', path: '/trend' },
  { display_name: 'Favourite Song', path: '/favourite-song' },
];

const TopMenu = (props) => {
  const [contentData, setContentData] = useState(musicMenu);
  return (
    <div className="top-menu">
      <div className="container">
        <div className="top-menu__content">
          <TopMenuHead />
          <TopMenuMid topMenuMidData={contentData} />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
