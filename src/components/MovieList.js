import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <>
    <h1 className="text-3xl p-3 m-3 text-white">{title}</h1>
    <div className="m-4 flex overflow-x-auto">
      <div className="flex ">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
    </>
  );
};

export default MovieList;
