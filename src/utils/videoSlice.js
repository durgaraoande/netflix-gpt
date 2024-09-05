import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: null,
    videoTrailers: null,
    popularMovies:null,
    topRated:null,
    upcoming:null
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.videoList = action.payload;
    },
    addVideoTrailers(state, action) {
      state.videoTrailers = action.payload;
    },
    addPopularMovies(state,action){
      state.popularMovies=action.payload;
    },
    addTopRatedMovies(state,action){
      state.topRated=action.payload;
    },
    addUpcomingMovies(state,action){
      state.upcoming=action.payload;
    }
  },
});

export const { addNowPlayingMovies,addVideoTrailers,addPopularMovies,addUpcomingMovies,addTopRatedMovies } = videoSlice.actions;

export default videoSlice.reducer;
