import React from 'react'

const GifList = ({ gifs }) => {
  return(
    <ul>
    {gifs.map(gif => {
      return(
        <li key={gif.id}>{gif.images.original.url}</li>
      )
    })}
  </ul>
  )
  
}

export default GifList