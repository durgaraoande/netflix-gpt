import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import VideoBackground from './VideoBackground';
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentMovieDetailsCardData } from '../utils/videoSlice';
import SecondaryMovieDetailsCard from './SecondaryMovieDetailsCard';

const MovieDetailsCard = () => {
  const dispatch=useDispatch();
  const movieDetails=useSelector(state=>state.config.movieDetails);
  const currentMovieDetailsCardData=useSelector(state=>state.video.currentMovieDetailsCardData);
  const {id}=useParams();
  useEffect(()=>{
    const searchMovieTmdb=async(id)=>{
      if(currentMovieDetailsCardData&&currentMovieDetailsCardData.id===id) return;
      const data=await fetch("https://api.themoviedb.org/3/movie/"+id,API_OPTIONS);
      const json=await data.json();
      dispatch(addCurrentMovieDetailsCardData(json)); 
    }
    searchMovieTmdb(id);
  })
  return (
    <div>
      <Header/>
      {movieDetails?<SecondaryMovieDetailsCard/>:<VideoBackground movieId={id}/>}
    </div>
  )
}

export default MovieDetailsCard;
