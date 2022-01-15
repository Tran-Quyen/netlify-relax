import React, { useState } from 'react';
import TopMenuHead from './components/TopMenuHead';
import TopMenuMid from './components/TopMenuMid';
import './top-menu.scss';

const musicMenu = [
  { display_name: 'Top Songs', path: '/best-song' },
  { display_name: 'Top Trends', path: '/trends-best-views' },
  { display_name: 'Favourite Song', path: '/favourite-song' },
];

const TopMenu = (props) => {
  const [contentData] = useState(musicMenu);
  const handleClickMenu = (event) => {
    const sidebarElm = document.querySelector('.sidebar-left');
    sidebarElm.classList.add('active');
  };
  return (
    <div className="top-menu">
      <div className="container">
        <div className="menu">
          <div onClick={handleClickMenu} className="menu-icon">
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </div>
        <div className="top-menu__content">
          <TopMenuHead />
          <TopMenuMid topMenuMidData={contentData} />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
