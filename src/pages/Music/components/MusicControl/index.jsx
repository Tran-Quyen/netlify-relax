import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '../../../../components/Grid';
import { setCurrentSongIndex } from '../../../../redux/music/musicSlice';
import ControlVolumn from '../../Features/ControlVolumn';
import ListControl from '../../Features/ListControl';
import Progress from '../../Features/Progress';
import Audio from '../Audio';
import './music-control.scss';

const MusicControl = () => {
  const audioRef = useRef(null);

  const currentSongIndex = useSelector((state) => state.music.currentSongIndex);
  const musicList = useSelector((state) => state.music.musicList);
  const dispatch = useDispatch();

  // because currentSongIndex can has value -1 => must check
  const currentSong = musicList[currentSongIndex] || {};

  useEffect(() => {
    if (currentSongIndex > -1) {
      audioRef.current &&
        audioRef.current.onLoadedMetadata(() => {
          audioRef.current.play();
        });
    }
  }, [currentSongIndex]);

  useEffect(() => {
    return () => {
      // when component unmount then setCurrentSongIndex = -1
      dispatch(setCurrentSongIndex(-1));
    };
  }, [dispatch]);
  return (
    <div className={`music-control ${currentSongIndex > -1 ? 'active' : ''}`}>
      <Grid gap={10} col={3} smCol={1}>
        <div className="music-control__info">
          <div className="music-control__img">
            <img src={currentSong?.info?.thumnail} alt="" />
          </div>
          <div className="music-control__desc">
            <div className="music-control__name">{currentSong?.info?.name}</div>
            <div className="music-control__author">
              {currentSong?.info?.author}
            </div>
          </div>
        </div>
        <div className="music-control__main">
          <div className="music-control__features">
            <ListControl audioRef={audioRef} />
          </div>
          <div className="music-conntrol__progress">
            <Progress audioRef={audioRef} />
          </div>
        </div>
        <ControlVolumn audioRef={audioRef} />
      </Grid>
      <Audio audioSource={currentSong?.info?.audioSource} ref={audioRef} />
    </div>
  );
};

export default MusicControl;
