import React from 'react'

const GifList = props => {
  return (
    <ul>
      {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
    </ul>
  )
}
  export default GifList
