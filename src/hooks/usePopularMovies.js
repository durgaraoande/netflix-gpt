import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies} from "../utils/videoSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popular=useSelector(store=>store.video.popularMovies);
  const getPopularMovies = async () => {
    if(popular) return;
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
