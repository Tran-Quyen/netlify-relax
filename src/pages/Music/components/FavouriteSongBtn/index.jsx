import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotify } from '../../../../redux/music/musicSlice';

const FavouriteSongBtn = ({ musicItem }) => {
  const iconRef = useRef(null);
  const dispatch = useDispatch();
  const notify = useSelector((state) => state.music.notify);

  // this function check musicItem exist in localStorage
  const checkHeart = () => {
    const musicListLocal = JSON.parse(localStorage.getItem('MUSIC_LIST'));
    const index = musicListLocal.findIndex(
      (music) => music.id === musicItem.id
    );
    return musicListLocal[index].yourFavouriteSongs;
  };

  const [heart, setHeart] = useState(() => checkHeart());

  const handleClickHeart = (e) => {
    e.stopPropagation();
    // heart status
    setHeart(!heart);
    const currentHeart = !heart;
    // set notify in redux
    dispatch(
      setNotify({
        ...notify,
        showStatus: true,
        mess: currentHeart
          ? `${musicItem.info.name} - added to Favourite Songs`
          : `${musicItem.info.name} - removed to Favourite Songs`,
      })
    );
    // set to local song is clicked
    const musicList = JSON.parse(localStorage.getItem('MUSIC_LIST')) || [];
    const newMusicList = [...musicList];
    const index = newMusicList.findIndex((music) => music.id === musicItem.id);
    newMusicList[index] = { ...musicItem, yourFavouriteSongs: currentHeart };
    localStorage.setItem('MUSIC_LIST', JSON.stringify(newMusicList));
  };

  return (
    <div className="music-card__add">
      <span onClick={handleClickHeart}>
        <i
          ref={iconRef}
          className={heart ? 'bx bxs-heart active' : 'bx bx-heart'}
        ></i>
      </span>
    </div>
  );
};

export default FavouriteSongBtn;
