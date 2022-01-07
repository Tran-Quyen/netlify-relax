import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';
import Section from '../../../../components/Section';
import Title from '../../../../components/Title';
import './favourite-song.scss';
import CardMusic from '../MusicCard';

const FavouriteSong = (props) => {
  const navigate = useNavigate();
  const currentSongIndex = useSelector((state) => state.music.currentSongIndex);
  const [favouriteList] = useState(() => {
    const musicList = JSON.parse(localStorage.getItem('MUSIC_LIST'));
    const favouriteList = musicList.filter((music) => music.yourFavouriteSongs);
    return favouriteList;
  });
  const handleClickToBtn = () => {
    navigate('/music');
  };
  return (
    <div className="favourite-song">
      <div className="container">
        <Title title="Your Favourite Songs List" />
        <div className="favourite-song__notify">
          {favouriteList.length === 0
            ? 'No songs have been added to favorites'
            : `Your favourite quantity: ${favouriteList.length}`}
        </div>
        {favouriteList.length !== 0 && (
          <>
            <div className="favourite-song__list">
              {favouriteList.map((item, index) => (
                <CardMusic
                  matchesCurrentSong={index === currentSongIndex}
                  key={item.id}
                  musicItem={item}
                  icon="bx bx-book-heart heart"
                />
              ))}
            </div>
            <Section>
              <div className="best-song__view-more">
                <Button type="hover" onClick={handleClickToBtn}>
                  View more
                </Button>
              </div>
            </Section>
          </>
        )}
      </div>
    </div>
  );
};

export default FavouriteSong;
