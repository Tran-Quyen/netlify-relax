import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  musicList: [],
  currentSongIndex: -1,
  isPlaying: false,
  notify: {
    showStatus: false,
    mess: '',
    type: 'success',
    icon: 'bx bx-check',
  },
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setCurrentSongIndex: (state, action) => {
      state.currentSongIndex = action.payload;
    },
    updateMusicList: (state, action) => {
      state.musicList = action.payload;
      localStorage.setItem('MUSIC_LIST', JSON.stringify(state.musicList));
    },
    setPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setNotify: (state, action) => {
      state.notify = { ...state.notify, ...action.payload };
    },
    enableRandomMode: (state) => {
      const randomSong = Math.trunc(
        Math.random() * (state.musicList.length - 1)
      );
      state.currentSongIndex = randomSong;
    },
  },
});

const { reducer, actions } = musicSlice;
const {
  setCurrentSongIndex,
  updateMusicList,
  setPlaying,
  enableRandomMode,
  setNotify,
} = actions;

export {
  setCurrentSongIndex,
  updateMusicList,
  setPlaying,
  enableRandomMode,
  setNotify,
};
export default reducer;
