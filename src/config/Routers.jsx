import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TikTok from '../pages/TikTok';
import PodCast from '../pages/PodCast';
import Music from '../pages/Music';
import Contact from '../pages/Contact';
import Album from '../pages/Album';
import MusicTrend from '../pages/Music/components/MusicTrend';
import BestSong from '../pages/Music/components/BestSong';
import FavouriteSong from '../pages/Music/components/FavouriteSong';

const Routers = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/music" element={<Music />} />
      <Route path="/best-song" element={<BestSong />} />
      <Route path="/favourite-song" element={<FavouriteSong />} />
      <Route path="/trend" element={<MusicTrend />} />
      <Route path="/tiktok" element={<TikTok />} />
      <Route path="/podcast" element={<PodCast />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/album" element={<Album />} />
    </Routes>
  );
};

export default Routers;
