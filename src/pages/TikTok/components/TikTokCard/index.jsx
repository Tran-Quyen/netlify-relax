import React, { useRef } from 'react';
import Button from '../../../../components/Button';
import Video from '../Video';
import VideoControls from '../VideoControls';
import './tiktok-card.scss';

const TikTokCard = ({ tiktok }) => {
  const videoRef = useRef(null);

  return (
    <div className="tiktok-card">
      <div className="tiktok-card__info">
        <div className="tiktok-card__image">
          <img src={tiktok.user.image} alt="" />
        </div>
        <div className="tiktok-card__desc">
          <div className="tiktok-card__name">
            <span>{tiktok.user.name}</span>
            {tiktok.user.blueTik ? <i className="bx bxs-check-circle"></i> : ''}
          </div>
          <div className="tiktok-card__cap">
            <span>{tiktok.caption.cap}</span>
          </div>
          <div className="tiktok-card__music">
            <div className="tiktok-card__music--icon">
              <i className="bx bx-music"></i>
            </div>
            <div className="tiktok-card__music--name">
              <span>{tiktok.caption.music}</span>
            </div>
          </div>
        </div>
        <div className="tiktok-card__follow">
          <Button type="hover--outline">Follow</Button>
        </div>
      </div>
      <Video tiktok={tiktok} ref={videoRef}>
        <VideoControls videoRef={videoRef} />
      </Video>
    </div>
  );
};

export default TikTokCard;
