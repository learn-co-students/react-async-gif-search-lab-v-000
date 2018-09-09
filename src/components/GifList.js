import React from 'react';

const GifList = props => {
  console.log(props.gifs.slice(0,3))
  return (
    <div>
      <ul>

      {props.gifs.slice(0,3).map(gif => <li><img key={gif.url} src={gif.url} alt={gif.url} /></li>)}
      </ul>
    </div>
  )
}

export default GifList
