import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/videoSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const now_playing_movies = useSelector((state) => state.video.videoList);
  const getNowPlayingMovies = async () => {
    if (now_playing_movies) return;
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
