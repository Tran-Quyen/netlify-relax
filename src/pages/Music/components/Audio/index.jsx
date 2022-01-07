import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import { setPlaying } from '../../../../redux/music/musicSlice';

const Audio = (props, ref) => {
  const audioRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handlePlay = () => {
      dispatch(setPlaying(true));
    };

    const handlePause = () => {
      dispatch(setPlaying(false));
    };
    audioRef.current.addEventListener('play', handlePlay);
    audioRef.current.addEventListener('pause', handlePause);
  }, [dispatch]);

  useImperativeHandle(ref, () => ({
    play() {
      audioRef.current.play();
    },
    pause() {
      audioRef.current.pause();
    },
    setCurrentTime(time) {
      audioRef.current.currentTime = time;
    },
    setVolume(volume) {
      audioRef.current.volume = volume;
    },
    setMute(status) {
      audioRef.current.muted = status;
    },
    getDuration() {
      return audioRef.current.duration;
    },
    getCurrentTime() {
      return audioRef.current.currentTime;
    },
    onTimeUpdate(callback) {
      audioRef.current.addEventListener('timeupdate', callback);
    },
    onLoadedMetadata(callback) {
      audioRef.current.addEventListener('loadedmetadata', callback);
    },
    onTimeupdate(callback) {
      audioRef.current.addEventListener('timeupdate', callback);
    },
    onEnded(callback) {
      audioRef.current.addEventListener('ended', callback);
    },
  }));

  return <audio ref={audioRef} src={props.audioSource} />;
};

export default forwardRef(Audio);
