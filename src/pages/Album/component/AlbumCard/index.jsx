import React from 'react';
import './album-card.scss';
import formatNumberMilion from '../../../../ultis/formatNumberMilion';
import Button from '../../../../components/Button';
import { useNavigate } from 'react-router-dom';

const AlbumCard = ({ album, onClick }) => {
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate(album.path_name);
    onClick();
  };
  return (
    <div
      style={{
        backgroundImage: `url(${album.thumnail})`,
      }}
      className="album-card"
    >
      <div className="album-card__info">
        <div className="album-card__name">
          <span>{album.display_name}</span>
        </div>
        <div className="album-card__sub--info">
          <div className="album-card__sub--item">
            <i className="bx bx-heart"></i>
            <span className="album-card__sub--interactive">
              {formatNumberMilion(album.heart)}
            </span>
          </div>
          <div className="album-card__sub--item">
            <i className="bx bx-message-rounded"></i>
            <span className="album-card__sub--interactive">
              {formatNumberMilion(album.comments)}
            </span>
          </div>
          <div className="album-card__sub--item">
            <i className="bx bx-user"></i>
            <span className="album-card__sub--interactive">
              {formatNumberMilion(album.users)}
            </span>
          </div>
        </div>
        <div className="album-card__btn">
          <Button onClick={handleClickBtn} type="hover">
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
