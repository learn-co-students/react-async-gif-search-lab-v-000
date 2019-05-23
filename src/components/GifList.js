import React from 'react';

const GifList = props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.gifs.map(gif => <li key={gif.url}><img key={gif.url} src={gif.url} alt="gif"/></li>)}
      </ul>
    </div>
  )
}

export default GifList
