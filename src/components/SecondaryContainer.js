import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store?.video?.videoList);
  const popular=useSelector((store)=>store?.video?.popularMovies);
  const topRated=useSelector((store)=>store?.video?.topRated);
  const upcoming=useSelector((store)=>store?.video?.upcoming);
  

  return (
    <div className="bg-black">
      <div className="-my-72 relative z-20">
        {nowPlaying && <MovieList title={"Now Playing"} movies={nowPlaying} />}
        {popular && <MovieList title={"Popular"} movies={popular} />}
        {topRated && <MovieList title={"Top Rated"} movies={topRated} />}
        {upcoming && <MovieList title={"Upcoming"} movies={upcoming} />}
      </div>
    </div>
  );
};

export default SecondaryContainer;
