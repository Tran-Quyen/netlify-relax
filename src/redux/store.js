import { configureStore } from '@reduxjs/toolkit'
import musicReducer from "./music/musicSlice";

export const store = configureStore({
    reducer: {
        music: musicReducer,
    },
})