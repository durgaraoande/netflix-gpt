import React from 'react'

const VideoTitle = ({title,overview}) => {
  
  return (
    <div className='w-screen aspect-video absolute pt-36 px-12 text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='text-lg w-4/12 my-3'>{overview}</p>
      <div>
        <button className='bg-white text-black py-2 px-4 rounded-md hover:bg-opacity-80'> ▶️ Play</button>
        <button className='bg-gray-500 text-white py-2 px-4 rounded-md mx-2'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
