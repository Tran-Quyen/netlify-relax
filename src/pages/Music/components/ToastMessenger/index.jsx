import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotify } from '../../../../redux/music/musicSlice';
import './toast-messenger.scss';

const ToastMessenger = () => {
  const toastMessRef = useRef(null);
  const timeoutRef = useRef(null);
  const notify = useSelector((state) => state.music.notify);
  const dispatch = useDispatch();

  const handleClickToRemove = () => {
    dispatch(setNotify({ ...notify, showStatus: false }));
  };

  useEffect(() => {
    const toastMess = document.querySelector('.toast-message.active');

    // audio hide notify after three seconds
    if (!toastMess) return;
    timeoutRef.current = setTimeout(() => {
      dispatch(setNotify({ ...notify, showStatus: false }));
      toastMess.classList.remove('active');
    }, 3000);

    return () => {
      clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line
  }, [notify.showStatus, notify.mess]);

  return (
    <div
      ref={toastMessRef}
      className={`toast-message ${
        notify.showStatus ? 'active' : ''
      } toast-message__${notify.type} ${notify.status ? 'active' : ''}`}
    >
      <div
        className={`toast-message__icon toast-message__icon--status--${notify.type}`}
      >
        <span>
          <i className={notify.icon}></i>
        </span>
      </div>
      <div className="toast-message__content">
        <span className="toast-message__content--song">
          {notify.mess.split('-')[0]}
        </span>
        <span className="toast-message__content--notify">
          {notify.mess.split('-')[1]}
        </span>
      </div>
      <div
        onClick={handleClickToRemove}
        className="toast-message__icon toast-message__icon--remove"
      >
        <span>
          <i className="bx bx-x"></i>
        </span>
      </div>
    </div>
  );
};

export default ToastMessenger;
