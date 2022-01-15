import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../../components/Button';
import { setPause } from '../../../../redux/tiktok/tiktokSlice';
import TikTokCard from '../TikTokCard';
import './tiktok-list.scss';

const TikTokList = ({ tiktokList }) => {
  let perLoad = 5;
  const tiktokListRef = useRef(null);
  const dispatch = useDispatch();
  const [infiniteList, setInfiniteList] = useState([]);
  const [index, setIndex] = useState(1);
  const [load, setLoad] = useState(false);

  const handleClickSeeMore = () => {
    window.location =
      'https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1';
  };

  useEffect(() => {
    setInfiniteList(tiktokList.slice(0, perLoad));
    setIndex(1);
  }, [perLoad, tiktokList]);

  useEffect(() => {
    let isMounted = true;
    const handleWindowScroll = () => {
      // check exist tiktokListRef
      if (!tiktokListRef.current) return;
      if (
        window.scrollY + window.innerHeight >=
        tiktokListRef.current.clientHeight + tiktokListRef.current.offsetTop
      ) {
        if (isMounted) setLoad(true);
      }
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      isMounted = false;
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  useEffect(() => {
    const start = index * perLoad;
    let end = start + perLoad;
    const maxPage = Math.ceil(tiktokList.length / perLoad);

    if (load && index <= maxPage) {
      const newListLoad = tiktokList.slice(start, end);
      setInfiniteList([...infiniteList, ...newListLoad]);
      setIndex(index + 1);
    }
  }, [load, index, tiktokList, perLoad, infiniteList]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        dispatch(setPause(false));
      } else {
        dispatch(setPause(true));
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [dispatch]);

  return (
    <div ref={tiktokListRef} className="tiktok-list">
      {infiniteList.map((tiktok) => (
        <TikTokCard key={tiktok.id} tiktok={tiktok} />
      ))}
      {infiniteList.length === tiktokList.length ? (
        <div className="button">
          <Button type="hover" onClick={handleClickSeeMore}>
            See More
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default TikTokList;
