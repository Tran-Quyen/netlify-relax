import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import Interactive from '../Interactive';
import './video.scss';
import { useSelector } from 'react-redux';

const Video = (props, ref) => {
  const videoRef = useRef(null);
  const videoPlayingRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      videoRef.current.play();
    },
    pause: () => {
      videoRef.current.pause();
    },
    onPlaying: (callback) => {
      if (!videoRef.current) return;
      videoRef.current.addEventListener('play', callback);
    },
    onPausing: (callback) => {
      if (!videoRef.current) return;
      videoRef.current.addEventListener('pause', callback);
    },
    checkMuted: () => {
      return videoRef.current.muted;
    },
    setMutedCurrentVideo: (status) => {
      videoRef.current.muted = status;
    },
    setPauseAllVideo: () => {
      const video = document.querySelector('.tiktok-list');
      const videoList = video.querySelectorAll('.video-tiktok');
      videoList.forEach((video) => video.pause());
      if (!videoList) return;
    },
  }));

  function videoScroll() {
    if (!videoRef.current) return;
    let windowHeight = window.innerHeight;
    let videoHeight = videoRef.current.clientHeight;
    let videoClientRect = videoRef.current.getBoundingClientRect().top;
    if (
      videoClientRect <= windowHeight - videoHeight * 0.5 - 200 &&
      videoClientRect - 150 >= 0 - videoHeight * 0.5
    ) {
      // save video is playing to videoPlayingRef
      videoPlayingRef.current = videoRef.current;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      // remove prev video is playing to videoPlayingRef
      videoPlayingRef.current = null;
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', videoScroll);
    return () => {
      window.removeEventListener('scroll', videoScroll);
    };
  }, []);

  const pause = useSelector((state) => state.tiktok.pause);
  useEffect(() => {
    if (pause && videoPlayingRef.current) {
      videoPlayingRef.current.pause();
    }
  }, [pause]);

  return (
    <div className="video-box">
      <div className="video">
        <video
          style={{ background: 'transparent' }}
          className="video-tiktok"
          muted={true}
          loop
          ref={videoRef}
          width="100%"
          src={props.tiktok.info.source}
        />
        {props.children}
      </div>
      <Interactive tiktok={props.tiktok} />
    </div>
  );
};

export default forwardRef(Video);
