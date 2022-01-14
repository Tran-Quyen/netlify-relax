import React from 'react';
import { useDispatch } from 'react-redux';
import './card-image.scss';
import { setCurrentImage } from '../../../../redux/album/albumSlice';

const CardImage = ({ imageItem }) => {
  const dispatch = useDispatch();

  const handleClickToCard = (image) => {
    dispatch(setCurrentImage(image));
  };

  return (
    <div onClick={() => handleClickToCard(imageItem)} className="card-image">
      <img src={imageItem.image} alt="" />
    </div>
  );
};

export default CardImage;
