import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import musicData from '../../assets/fake-data/music-data';
import Helmet from '../../components/Helmet';
import Section from '../../components/Section';
import Title from '../../components/Title';
import { updateMusicList } from '../../redux/music/musicSlice';
import MusicControl from './components/MusicControl';
import MusicList from './components/MusicList';
import './music.scss';

const Music = () => {
  const musicList = useSelector((state) => state.music.musicList);
  const dispatch = useDispatch();

  useEffect(() => {
    const musicList =
      JSON.parse(localStorage.getItem('MUSIC_LIST')) || musicData;
    dispatch(updateMusicList(musicList));
  }, [dispatch]);
  return (
    <Helmet title="Music Trend">
      <div className="music">
        <div className="over-lay"></div>
        <div className="container">
          <Section>
            <Title title="Your PlayList" />
            <MusicList data={musicList} />
          </Section>
        </div>
        <MusicControl />
      </div>
    </Helmet>
  );
};

export default Music;
