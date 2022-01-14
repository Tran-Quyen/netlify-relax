import React, { useRef } from 'react';
import Grid from '../../../../components/Grid';
import AlbumCard from '../AlbumCard';
import './album-list.scss';

const albumList = [
  {
    id: 1,
    display_name: 'Wedding Photos',
    thumnail:
      'https://i.pinimg.com/564x/d8/9f/fe/d89ffe02d593e9d35afc68ce61267f59.jpg',
    heart: 8726312,
    comments: 2174,
    users: 39128,
    path_name: '/album/wedding-photos',
  },
  {
    id: 2,
    display_name: 'Hair Style',
    thumnail:
      'https://i.pinimg.com/564x/17/c2/c1/17c2c1eaa77868af1584efd17e36a7eb.jpg',
    heart: 821371,
    comments: 522,
    users: 623,
    path_name: '/album/hair-style',
  },
  {
    id: 3,
    display_name: 'Fashion',
    thumnail:
      'https://i.pinimg.com/564x/b1/10/ee/b110ee7e17cb43b44ffc908f36dca0f8.jpg',
    heart: 88142,
    comments: 1245,
    users: 12384,
    path_name: '/album/fashion-photos',
  },
  {
    id: 4,
    display_name: 'Car model',
    thumnail:
      'https://i.pinimg.com/564x/ad/ea/a1/adeaa1d253aa4b4f103f88aec77bb0eb.jpg',
    heart: 88912,
    comments: 214,
    users: 981,
    path_name: '/album/car-model',
  },
  {
    id: 5,
    display_name: 'photo pose',
    thumnail:
      'https://i.pinimg.com/750x/a5/cc/e5/a5cce5f27e0039c35cc40e3999773696.jpg',
    heart: 5712,
    comments: 124,
    users: 63,
    path_name: '/album/photo-pose',
  },
  {
    id: 6,
    display_name: 'Couple',
    thumnail:
      'https://i.pinimg.com/564x/c1/c8/17/c1c8170769b3a9438c254566750cfca3.jpg',
    heart: 2145,
    comments: 148,
    users: 324,
    path_name: '/album/couple-photos',
  },
];

const AlbumList = () => {
  const albumListRef = useRef(null);

  const clickToAlbumCard = () => {
    if (!albumListRef.current) return;
    setTimeout(() => {
      window.scrollTo(
        0,
        albumListRef.current.offsetTop + albumListRef.current.offsetHeight
      );
    }, 300);
  };
  return (
    <div ref={albumListRef} className="album-list">
      <Grid col={5} mdCol={4} smCol={2} gap={20}>
        {albumList.map((album) => (
          <AlbumCard onClick={clickToAlbumCard} key={album.id} album={album} />
        ))}
      </Grid>
    </div>
  );
};

export default AlbumList;
