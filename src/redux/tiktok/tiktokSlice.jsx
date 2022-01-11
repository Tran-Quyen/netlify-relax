import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  muted: true,
  pause: false,
};

const musicSlice = createSlice({
  name: 'tiktok',
  initialState,
  reducers: {
    setMuted: (state, action) => {
      state.muted = action.payload;
    },
    setPause: (state, action) => {
      state.pause = action.payload;
    },
  },
});

const { actions, reducer } = musicSlice;
const { setMuted, setPause } = actions;

export { setMuted, setPause };

export default reducer;
