import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  enableRandomMode,
  setCurrentSongIndex,
} from '../../../../redux/music/musicSlice';
import './list-control.scss';

const ListControl = ({ audioRef }) => {
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const currentSongIndex = useSelector((state) => state.music.currentSongIndex);
  const musicList = useSelector((state) => state.music.musicList);
  const [loopSong, setLoopSong] = useState(false);
  const [randomSong, setRandomSong] = useState(false);

  const dispatch = useDispatch();

  const handleClickToPlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handlePrev = () => {
    if (currentSongIndex <= 0) {
      dispatch(setCurrentSongIndex(musicList.length - 1));
    } else {
      dispatch(setCurrentSongIndex(currentSongIndex - 1));
    }
  };
  const handleNext = useCallback(() => {
    if (currentSongIndex >= musicList.length - 1) {
      dispatch(setCurrentSongIndex(0));
    } else {
      dispatch(setCurrentSongIndex(currentSongIndex + 1));
    }
  }, [dispatch, currentSongIndex, musicList]);

  const handleRandomSong = () => {
    setRandomSong(!randomSong);
    setLoopSong(randomSong ? !randomSong : false);
  };

  const handleLoopSong = () => {
    setLoopSong(!loopSong);
    setRandomSong(loopSong ? !loopSong : false);
  };

  useEffect(() => {
    audioRef.current.onEnded(() => {
      if (loopSong) {
        dispatch(setCurrentSongIndex(currentSongIndex));
      } else if (randomSong) {
        dispatch(enableRandomMode());
      } else {
        handleNext();
      }
    });
  }, [audioRef, currentSongIndex, dispatch, randomSong, handleNext, loopSong]);

  return (
    <div className="list-control">
      <div
        onClick={handleRandomSong}
        title="Random Song"
        className="list-control__item "
      >
        <i className={`bx bx-infinite ${randomSong ? 'active' : ''}`}></i>
      </div>
      <div onClick={handlePrev} className="list-control__item">
        <i className="bx bx-skip-previous"></i>
      </div>
      <div onClick={handleClickToPlay} className="list-control__item">
        <i className={`bx bx-${isPlaying ? 'pause' : 'play'}-circle`}></i>
      </div>
      <div onClick={handleNext} className="list-control__item">
        <i className="bx bx-skip-next"></i>
      </div>
      <div onClick={handleLoopSong} className="list-control__item">
        <i className={`bx bx-refresh ${loopSong ? 'active' : ''}`}></i>
      </div>
    </div>
  );
};

export default ListControl;
