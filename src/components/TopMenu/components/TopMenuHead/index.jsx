import React from 'react';
import DropDown from '../../../Dropdown';
import './top-menu-head.scss';
const user_data = [
  {
    display_name: 'Settings',
    icon: 'bx bxs-cog',
  },
  {
    display_name: 'Logout',
    icon: 'bx bx-log-out',
  },
];

const setting_data = [
  {
    display_name: 'ui',
    icon: 'bx bxs-adjust',
    subIcon: 'bx bxs-chevron-down',
    subDropdown: ['Fall', 'Winter', 'Spring', 'Summer'],
  },
  {
    display_name: 'language',
    icon: 'bx bxs-wrench',
    subIcon: 'bx bxs-chevron-down',
    subDropdown: ['En', 'Vi', 'Fr', 'Chi'],
  },
  {
    display_name: 'security',
    icon: 'bx bx-lock-alt',
  },
];

const renderMenu = (item, index) => {
  const handleMenuItemClick = () => {
    const subMenu = document.querySelector(
      `#sub-dropdown__${item.display_name}`
    );
    subMenu.classList.toggle('active');
  };

  const handleClickSubItem = (value, type) => {
    console.log('You clicked: ', value);
    console.log('Type: ', type);
  };
  return (
    <div
      key={index}
      className="top-menu__head--right__user--item"
      onClick={item.subDropdown ? handleMenuItemClick : null}
    >
      <div className="top-menu__head--right__user--item__toggle">
        <i className={item.icon}></i>
        <span>{item.display_name}</span>
        {item.subIcon ? <i className={item.subIcon}></i> : ''}
      </div>
      {item.subDropdown ? (
        <div className="sub-dropdown" id={`sub-dropdown__${item.display_name}`}>
          {item.subDropdown.map((name, index) => (
            <div
              onClick={() => handleClickSubItem(name, item.display_name)}
              key={index}
              className="sub-dropdown__item"
            >
              {name}
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const TopMenuHead = () => {
  return (
    <div className="top-menu__head">
      <div className="top-menu__head--search">
        <input type="text" placeholder="Search..." />
        <button className="btn btn-search">
          <i className="bx bx-search-alt"></i>
        </button>
      </div>
      <div className="top-menu__head--right">
        <div className="top-menu__head--right__item">
          <DropDown
            renderItem={(item, index) => renderMenu(item, index)}
            contentData={user_data}
            icon="bx bx-user"
          />
        </div>
        <div className="top-menu__head--right__item">
          <DropDown
            contentData={setting_data}
            renderItem={(item, index) => renderMenu(item, index)}
            icon="bx bxs-cog"
          />
        </div>
      </div>
    </div>
  );
};

export default TopMenuHead;
