import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './modal.scss';
import { setCurrentImage } from '../../../../redux/album/albumSlice';

const Modal = () => {
  const [close, setClose] = useState(false);
  const currentImage = useSelector((state) => state.album.currentImage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentImage) {
      setClose(true);
    }
  }, [currentImage]);
  return (
    <>
      {close ? (
        <div className="list-image__modal">
          <div className="list-image__modal--image">
            <div
              onClick={() => {
                setClose(false);
                dispatch(setCurrentImage(null));
              }}
              className="list-image__modal--close"
            >
              <i className="bx bx-x"></i>
            </div>
            <div className="list-image__modal--type">
              <span>{currentImage?.type}</span>
            </div>
            <img src={currentImage?.image} alt="" />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Modal;
