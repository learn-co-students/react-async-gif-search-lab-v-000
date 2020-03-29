import React from 'react'

const GifList = props => {
  console.log(props);
  return (
    <ul class="image-container">
        {props.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt="gif"/></li>)}
    </ul>
  )
}

export default GifList
