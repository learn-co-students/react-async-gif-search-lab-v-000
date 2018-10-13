import React from 'react';

const GifList = props => 
  <ul>
    {props.gifs.map(gif => {
      return <li><img src={gif} /></li>
    })}
  </ul>

export default GifList;
