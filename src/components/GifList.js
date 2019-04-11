import React from 'react'

const GifList = props => {
  console.log('GifList:', props);

  return (
    <div>
      {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" /> )}
    </div>
  )
}

export default GifList