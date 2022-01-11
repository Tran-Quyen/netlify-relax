import React, { useState } from 'react';
import formatNumberMilion from '../../../../ultis/formatNumberMilion';
import './interactive.scss';

const Interactive = ({ tiktok }) => {
  const [heart, setHeart] = useState(null);
  const handleClickHeart = () => {
    setHeart(!heart);
  };
  return (
    <div className="tiktok-card__interactives">
      <div
        onClick={handleClickHeart}
        className="tiktok-card__interactives--item"
      >
        <i className={heart ? 'bx bxs-heart active' : 'bx bxs-heart'}></i>
        <span>{formatNumberMilion(tiktok.info.heart)}</span>
      </div>
      <div className="tiktok-card__interactives--item">
        <i className="bx bxs-message-rounded-dots"></i>
        <span>{formatNumberMilion(tiktok.info.comments)}</span>
      </div>
      <div className="tiktok-card__interactives--item">
        <i className="bx bxs-share"></i>
        <span>{formatNumberMilion(tiktok.info.shares)}</span>
      </div>
    </div>
  );
};

export default Interactive;
