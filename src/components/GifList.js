import React from 'react'

const GifList = props => 
  <ul className="list-group">
    {props.gifs.map((gif, i) => (
      <li className="list-group-item" key={i}><img src={gif.images.original.url} /></li>
    ))}
  </ul>

export default GifList