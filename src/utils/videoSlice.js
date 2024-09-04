import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: null,
    videoTrailers: null,
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.videoList = action.payload;
    },
    addVideoTrailers(state, action) {
      state.videoTrailers = action.payload;
    },
  },
});

export const { addNowPlayingMovies,addVideoTrailers } = videoSlice.actions;

export default videoSlice.reducer;
