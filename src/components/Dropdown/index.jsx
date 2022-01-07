import React, { useEffect, useRef } from 'react';
import './dropdown.scss';

const clickOutSide = (toggleRef, dropdownRef) => {
  document.addEventListener('mousedown', (e) => {
    // user click toggle btn
    if (toggleRef.current.contains(e.target)) {
      dropdownRef.current.classList.toggle('active');
    } else if (dropdownRef.current.contains(e.target)) {
      // user click inside btn
      dropdownRef.current.classList.add('active');
    } else {
      // user click to outside toggle
      dropdownRef.current.classList.remove('active');
    }
  });
};

const DropDown = (props) => {
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);
  const dropDownContentRef = useRef(null);

  useEffect(() => {
    clickOutSide(toggleRef, dropdownRef, dropDownContentRef);
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown">
      <span ref={toggleRef} className="dropdown-toggle">
        {props.icon ? <i className={props.icon}></i> : ''}
      </span>
      <div
        ref={dropDownContentRef}
        className={`dropdown__content ${
          !(props.contentData && props.renderItem) ? 'hide' : ''
        }`}
      >
        {props.contentData && props.renderItem
          ? props.contentData.map((item, index) =>
              props.renderItem(item, index)
            )
          : null}
      </div>
    </div>
  );
};

export default DropDown;
