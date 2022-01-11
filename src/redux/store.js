import { configureStore } from '@reduxjs/toolkit'
import musicReducer from "./music/musicSlice";
import tiktokReducer from './tiktok/tiktokSlice';

export const store = configureStore({
    reducer: {
        music: musicReducer,
        tiktok: tiktokReducer
    },
})