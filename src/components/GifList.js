import React from 'react';

const GifList = gifs => (
  <ul>
    {gifs.map(gif => {
      <li>{gif.images.original.url}</li>
    })}
  </ul>
)

export default GifList
