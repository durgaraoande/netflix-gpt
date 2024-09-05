import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='w-40 mx-4'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    </div>
  )
}

export default MovieCard
