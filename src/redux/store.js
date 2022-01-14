import { configureStore } from '@reduxjs/toolkit'
import musicReducer from "./music/musicSlice";
import tiktokReducer from './tiktok/tiktokSlice';
import albumReducer from "./album/albumSlice";

export const store = configureStore({
    reducer: {
        music: musicReducer,
        tiktok: tiktokReducer,
        album: albumReducer
    },
})