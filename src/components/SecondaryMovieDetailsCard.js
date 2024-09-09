import React from "react";
import { useSelector } from "react-redux";
import { BG_Image } from "../utils/constants";

const SecondaryMovieDetailsCard = () => {
  const { original_title, genres, overview, release_date, tagline ,imdb_id} =
    useSelector((state) => state.video.currentMovieDetailsCardData);
  return (
    <div className="">
      <div>
        <img
          className="absolute w-full object-cover -z-20"
          src={BG_Image}
          alt="Background"
        />
      </div>
      <div className="flex justify-center">
      <div className="bg-black text-white bg-opacity-80 w-1/2 mt-48 p-4">
        <h1 className="font-bold text-3xl text-center my-2">{original_title}</h1>
        <h4 className="font-bold text-lg text-center text-violet-300 my-2">- {tagline}</h4>
        <ul className="flex justify-evenly">
        {genres.map((genre) => (
          <li className="p-2 m-2 bg-blue-300 rounded-md text-blue-950 my-2" key={genre.name}>{genre.name}</li>
        ))}
        </ul>
        <p className="bg-gray-400 text-gray-950 p-4 text-md text-balance my-2">{overview}</p>
        <div className="flex justify-between">
        <h4 className="text-center my-2">Date Released - {release_date}</h4>
        <a className="bg-yellow-300 text-black p-2 rounded-md" target="_blank" href={"https://www.imdb.com/title/"+imdb_id}>IMDB</a>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default SecondaryMovieDetailsCard;
