import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptSearchResult = () => {
  const {movieNames,movieData}=useSelector((store)=>store.gpt)
  if(!movieNames) return;


  return (
    <div className='bg-black text-white'>
      {movieNames.map((movie,index)=><MovieList key={index} title={movie} movies={movieData[index]}/>)}
    </div>
  )
}

export default GptSearchResult
