import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import musicData from '../../../../assets/fake-data/music-data';
import Grid from '../../../../components/Grid';
import { setCurrentSongIndex } from '../../../../redux/music/musicSlice';
import commasNumber from '../../../../ultis/commasNumber';
import FavouriteSongBtn from '../FavouriteSongBtn';
import './music-card.scss';

const CardMusic = (props) => {
  const musicItem = props.musicItem ? props.musicItem : {};
  const currentSongIndex = useSelector((state) => state.music.currentSongIndex);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const matchesCurrentSong = () => {
    return props.index === currentSongIndex;
  };

  // Because the Music component is not mounted yet, the music list has not been dispatched
  const musicList = JSON.parse(localStorage.getItem('MUSIC_LIST')) || musicData;
  const isPlaying =
    useSelector((state) => state.music.isPlaying) && matchesCurrentSong();

  const handleClickToMusicCard = () => {
    const newCurrentSongIndex = musicList.findIndex(
      (music) => music.id === musicItem.id
    );
    dispatch(setCurrentSongIndex(newCurrentSongIndex));
    navigate('/music');
  };

  return (
    <div
      onClick={handleClickToMusicCard}
      className={`music-card ${
        isPlaying || matchesCurrentSong() ? 'active' : ''
      }`}
    >
      <Grid gap={20} col={3}>
        <div className="music-card__item">
          {props.icon ? (
            <div
              className={`music-card__icon ${
                isPlaying || matchesCurrentSong() ? 'active' : ''
              }`}
            >
              <i className={props.icon}></i>
            </div>
          ) : (
            ''
          )}
          {props.number ? (
            <div
              className={`music-card__icon ${
                isPlaying || matchesCurrentSong() ? 'active' : ''
              }`}
            >
              <span className="music-card__number">{props.number}</span>
            </div>
          ) : (
            ''
          )}
          <div className="music-card__info">
            <div className="music-card__image">
              <img src={musicItem?.info?.thumnail} alt="" />
              <span className="music-card__image--status">
                {isPlaying ? (
                  <div className="music-card__image--status__playing">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  <i className="bx bx-play-circle"></i>
                )}
              </span>
            </div>
            <div className="music-card__desc">
              <h3 className="music-card__name">{musicItem?.info?.name}</h3>
              <div className="music-card__author">
                <span>{musicItem?.info?.author}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="music-card__item">
          <div className="music-card__album">{musicItem?.info?.album}</div>
        </div>
        <div className="music-card__item">
          <div className="music-card__listens">
            <span className="music-card__listens--icon">
              <i className="bx bx-headphone"></i>
            </span>
            <span className="music-card__listens--quantity">
              {commasNumber(musicItem?.info?.listens)}
            </span>
          </div>
          {props.favouriteSong && <FavouriteSongBtn musicItem={musicItem} />}
        </div>
      </Grid>
    </div>
  );
};

export default CardMusic;
