import React from 'react';
import './button.scss';

const Button = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`btn-navigate btn-navigate__${props.type ? props.type : ''}`}
    >
      {props.children}
    </div>
  );
};

export default Button;
