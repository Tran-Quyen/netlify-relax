import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentImage: null,
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    setCurrentImage: (state, action) => {
      state.currentImage = action.payload;
    },
  },
});

const { actions, reducer } = albumSlice;
const { setCurrentImage } = actions;

export { setCurrentImage };
export default reducer;
