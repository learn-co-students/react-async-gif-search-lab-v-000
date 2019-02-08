import React from 'react'
 
const GifList = (props) => {

  return (
    <div>
    {props.gifs.map(gif => <img key={gif.images.original.url} src={gif.images.original.url} alt="gif"/>)}
    </div>
  )
}

export default GifList