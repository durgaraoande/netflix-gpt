import { createSlice, current } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: null,
    videoTrailers: null,
    popularMovies: null,
    topRated: null,
    upcoming: null,
    currentMovieDetailsCardData: null,
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.videoList = action.payload;
    },
    addVideoTrailers(state, action) {
      state.videoTrailers = action.payload;
    },
    addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies(state, action) {
      state.topRated = action.payload;
    },
    addUpcomingMovies(state, action) {
      state.upcoming = action.payload;
    },
    addCurrentMovieDetailsCardData(state, action) {
      state.currentMovieDetailsCardData = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addVideoTrailers,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addCurrentMovieDetailsCardData,
} = videoSlice.actions;

export default videoSlice.reducer;
