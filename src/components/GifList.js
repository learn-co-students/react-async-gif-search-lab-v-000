import React, { Component } from 'react';

const GifList = ({ gifs }) => (
  <ul>
     {gifs.map(gif => 
      <li><img key={gif.id} src={gif.images.downsized.url} alt="gif"/></li>)}
  </ul>
  )



export default GifList