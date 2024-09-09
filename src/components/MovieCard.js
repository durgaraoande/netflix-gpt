import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addMoviePage} from '../utils/configSlice';

const MovieCard = ({movie}) => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  if(!movie.poster_path) return null;
  return (
    <div className='w-40 mx-4'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='cursor-pointer' onClick={()=>{ dispatch(addMoviePage(true)); navigate("/movie/"+movie.id)}}/>
    </div>
  )
}

export default MovieCard
