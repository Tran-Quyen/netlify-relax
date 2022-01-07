import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';
import Section from '../../../../components/Section';
import Title from '../../../../components/Title';
import CardMusic from '../MusicCard';
import './best-song.scss';

const BestSong = () => {
  const bestSongListRef = useRef(null);
  const navigate = useNavigate();

  const [musicList] = useState(() => {
    const musicList = JSON.parse(localStorage.getItem('MUSIC_LIST'));
    return musicList || [];
  });
  const [bestSongList] = useState(() => {
    const newList = [...musicList];
    for (let i = 0; i < newList.length - 1; i++) {
      for (let j = i + 1; j < newList.length; j++) {
        if (newList[i].info.listens < newList[j].info.listens) {
          let tmp = newList[j];
          newList[j] = newList[i];
          newList[i] = tmp;
        }
      }
    }
    return newList.slice(0, 10);
  });

  const handleClickToBtn = () => {
    navigate('/music');
  };

  useEffect(() => {
    const numberListElm = bestSongListRef.current.querySelectorAll(
      '.music-card__number'
    );
    if (numberListElm.length === 0) return;
    for (let i = 0; i <= 2; i++) {
      numberListElm[i].classList.add('music-card__number--special');
    }
  }, []);

  return (
    <div className="best-song">
      <div className="container">
        <Title title={`Top ${bestSongList.length} most listened songs`} />
        <div ref={bestSongListRef} className="best-song__list">
          {bestSongList.map((item, index) => (
            <CardMusic key={item.id} musicItem={item} number={index + 1} />
          ))}
        </div>
        <Section>
          <div className="best-song__view-more">
            <Button type="hover" onClick={handleClickToBtn}>
              View more
            </Button>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default BestSong;
