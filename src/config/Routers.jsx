import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TikTok from '../pages/TikTok';
import Music from '../pages/Music';
import Contact from '../pages/Contact';
import Album from '../pages/Album';
import BestSong from '../pages/Music/components/BestSong';
import FavouriteSong from '../pages/Music/components/FavouriteSong';
import TrendsBestViews from '../pages/TikTok/components/TrendsBestViews';
import WeddingPhotos from '../pages/Album/pages/WeddingPhotos';
import CarModel from '../pages/Album/pages/CarModel';
import PhotoPose from '../pages/Album/pages/PhotoPose';
import HairStyle from '../pages/Album/pages/HairStyle';
import Fashion from '../pages/Album/pages/Fashion';
import Couple from '../pages/Album/pages/Couple';

const Routers = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/music" element={<Music />} />
      <Route path="/best-song" element={<BestSong />} />
      <Route path="/favourite-song" element={<FavouriteSong />} />
      <Route path="/trends-best-views" element={<TrendsBestViews />} />
      <Route path="/tiktok" element={<TikTok />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/album/*" element={<Album />}>
        <Route path="wedding-photos" element={<WeddingPhotos />} />
        <Route path="car-model" element={<CarModel />} />
        <Route path="photo-pose" element={<PhotoPose />} />
        <Route path="hair-style" element={<HairStyle />} />
        <Route path="fashion-photos" element={<Fashion />} />
        <Route path="couple-photos" element={<Couple />} />
      </Route>
    </Routes>
  );
};

export default Routers;
