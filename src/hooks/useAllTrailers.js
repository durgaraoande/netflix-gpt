import { useDispatch } from "react-redux";
import { addVideoTrailers } from "../utils/videoSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

// Desc: Custom hook to fetch all trailers from the API
const useAllTrailers = (movieId) => {
    const dispatch=useDispatch();
    const getAllVideos=async(movieId)=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS);
      const trailers = await data.json();

      const filteredTrailers = trailers.results.filter(
        (trailer) => trailer.type === "Trailer"
      );
      
      const trailer = filteredTrailers ? filteredTrailers[0] : trailers[0];
      dispatch(addVideoTrailers(trailer));
    } 
    useEffect(()=>{
      getAllVideos(movieId);
    },[]);
}

export default useAllTrailers;
