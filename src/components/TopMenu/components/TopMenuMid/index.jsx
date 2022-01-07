import React from 'react';
import { NavLink } from 'react-router-dom';
import './top-menu-mid.scss';

const TopMenuMid = ({ topMenuMidData = [] }) => {
  return (
    <div className="top-menu__mid">
      {topMenuMidData.map((item, index) => (
        <NavLink
          to={`${item.path}`}
          key={index}
          className="top-menu__mid--item"
        >
          {item.display_name}
        </NavLink>
      ))}
    </div>
  );
};

export default TopMenuMid;
