import React from 'react';

const GifList = props =>
  <ul>
    {props.images && props.images.map(g => (
    <img src={g.url} />
    ))}
  </ul>

export default GifList;