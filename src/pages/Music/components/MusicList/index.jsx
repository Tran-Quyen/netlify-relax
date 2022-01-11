import React, { useEffect, useRef, useState } from 'react';
import sleepAsync from '../../../../ultis/sleepAsync';
import Loading from '../Loading';
import CardMusic from '../MusicCard';
import ToastMessenger from '../ToastMessenger';
import './music-list.scss';

const MusicList = ({ data }) => {
  const loadRef = useRef(false);
  let perLoad = 10;
  const [musicList, setMusicList] = useState([]);
  const [load, setLoad] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClickLoadMore = () => {
    setLoad(true);
    loadRef.current = true;
    setIndex(index + 1);
    const maxPage = Math.ceil(data.length / perLoad);
    if (index < maxPage && loadRef.current) {
      const start = index * perLoad;
      let end = index * perLoad + perLoad;
      if (end > data.length) {
        end = start + (end - data.length);
      }
      const newDataLoad = data.slice(start, end);
      const newData = musicList.concat(newDataLoad);
      sleepAsync(1000, () => {
        setMusicList(newData);
        setLoad(false);
        loadRef.current = false;
      });
    }
  };

  useEffect(() => {
    let isMounted = true;

    setMusicList(data.slice(0, perLoad));
    if (isMounted) setIndex(1);

    return () => {
      isMounted = false;
    };
  }, [data, perLoad]);

  return (
    <div className="music__list">
      <ToastMessenger />
      {musicList.map((item, index) => (
        <CardMusic
          index={index}
          key={item.id}
          musicItem={item}
          icon="bx bx-music"
          favouriteSong={true}
        />
      ))}
      {!load && musicList.length < data.length ? (
        <div className="music__list--down">
          <span
            className="music__list--down__icon"
            onClick={handleClickLoadMore}
          >
            <i className="bx bxs-chevron-down"></i>
          </span>
        </div>
      ) : musicList.length === data.length ? (
        <div className="music__list--down">
          <span className="music__list--down__content">
            Finished Downloading
          </span>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MusicList;
