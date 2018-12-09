import React from 'react';

const GifList = props => {
  return (
    <ul>
      {props.gifs.map(gif => ( <img src={gif.url}  alt="gif" key={gif.url}/>))}
    </ul>
  )
}

export default GifList;
