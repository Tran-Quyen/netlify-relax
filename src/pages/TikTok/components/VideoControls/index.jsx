import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMuted } from '../../../../redux/tiktok/tiktokSlice';
import './video-controls.scss';

const VideoControls = ({ videoRef }) => {
  const iconRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  const muted = useSelector((state) => state.tiktok.muted);
  const dispatch = useDispatch();

  const handleClickToPlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.setPauseAllVideo();
      videoRef.current.play();
    }
  };

  const handleClickVolume = () => {
    if (!videoRef.current) return;
    if (videoRef.current.checkMuted()) {
      dispatch(setMuted(false));
    } else {
      dispatch(setMuted(true));
    }
  };

  useEffect(() => {
    let isMounted = true;
    videoRef.current.onPlaying(() => {
      if (isMounted) setPlaying(true);
    });

    videoRef.current.onPausing(() => {
      if (isMounted) setPlaying(false);
    });

    return () => {
      isMounted = false;
    };
  }, [videoRef]);

  useEffect(() => {
    if (muted) {
      // check, if has muted then setMuted of current video to true
      videoRef.current.setMutedCurrentVideo(true);
    } else {
      // check, if not has muted then setMuted of current video to false
      videoRef.current.setMutedCurrentVideo(false);
    }
  }, [muted, videoRef]);

  return (
    <div className="video-controls">
      <span onClick={handleClickToPlay} className="video-controls__icon">
        <i
          ref={iconRef}
          className={`play-tiktok bx bx-${isPlaying ? 'pause' : 'play'}`}
        ></i>
      </span>
      <span onClick={handleClickVolume} className="video-controls__icon">
        <i
          className={`volume-tiktok bx ${
            muted ? 'bx-volume-mute' : 'bx-volume-full'
          }`}
        ></i>
      </span>
    </div>
  );
};

export default VideoControls;
