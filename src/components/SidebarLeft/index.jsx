import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import pinterest from '../../assets/images/pinterest-logo.png';
import tiktok from '../../assets/images/tiktok-logo.png';
import zing from '../../assets/images/zing-logo.png';
import Logo from '../Logo';
import Title from '../Title';
import './sidebar-left.scss';

const sidebarListApp = [
  {
    display_name: 'Home',
    path: '/',
    icon: 'bx bx-home',
  },
  {
    display_name: 'Music Trend',
    path: '/music',
    icon: 'bx bx-music',
  },
  {
    display_name: 'TikTok Trend',
    path: '/tiktok',
    icon: 'bx bxl-tiktok',
  },
  {
    display_name: 'Photos Album',
    path: '/album',
    icon: 'bx bx-photo-album',
  },
];

const sidebarListAbout = [
  {
    display_name: 'Contact',
    path: '/contact',
    icon: 'bx bx-mail-send',
  },
  {
    display_name: 'Info',
    path: '/info',
    icon: 'bx bx-info-circle',
  },
];

const sidebarListPartner = [
  {
    display_name: 'TikTok',
    path: 'https://www.tiktok.com/',
    img: tiktok,
  },
  {
    display_name: 'Zing Mp3',
    path: 'https://zingmp3.vn/',
    img: zing,
  },
  {
    display_name: 'Pinterest',
    path: 'https://www.pinterest.com/',
    img: pinterest,
  },
];

const clickOutSide = (btnToggle, dropdown) => {
  window.addEventListener('click', (e) => {
    if (
      btnToggle.current.contains(e.target) ||
      dropdown.current.contains(e.target)
    ) {
      dropdown.current.classList.remove('active');
    }
  });
};

const SidebarLeft = () => {
  const sidebarLeftRef = useRef(null);
  const closeMenuRef = useRef(null);

  useEffect(() => {
    clickOutSide(closeMenuRef, sidebarLeftRef);
  }, []);

  return (
    <div ref={sidebarLeftRef} className="sidebar-left">
      <span ref={closeMenuRef} className="close-menu">
        <i className="bx bx-x"></i>
      </span>
      <Logo />
      <Title title="Your Application" />
      <div className="sidebar-left__list">
        {sidebarListApp.map((item, index) => (
          <div key={index} className="sidebar-left__list--item">
            <NavLink to={item.path}>
              <span>
                <i className={item.icon}></i>
              </span>
              {item.display_name}
            </NavLink>
          </div>
        ))}
      </div>
      <Title title="About" />
      <div className="sidebar-left__list">
        {sidebarListAbout.map((item, index) => (
          <div key={index} className="sidebar-left__list--item ">
            <NavLink to={item.path}>
              <span>
                <i className={item.icon}></i>
              </span>
              {item.display_name}
            </NavLink>
          </div>
        ))}
      </div>
      <Title title="Partner" />
      <div className="sidebar-left__list">
        {sidebarListPartner.map((item, index) => (
          <div key={index} className={`sidebar-left__list--item`}>
            <a href={item.path}>
              <span>
                <img src={item.img} alt="" />
              </span>
              {item.display_name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarLeft;
