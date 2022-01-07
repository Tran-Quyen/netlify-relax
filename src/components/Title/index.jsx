import React from 'react';
import './title.scss';

const Title = (props) => {
  return (
    <div className="title">
      <span className="title-content">{props.title}</span>
    </div>
  );
};

export default Title;
