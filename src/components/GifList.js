import React, {Component} from 'react'

const GifList = props => (
  <ul>
    {props.gifs.map((gif) =>
      <li><img key={gif.url} src={gif.url} alt="gif"></img></li>
    )}
  </ul>
)

export default GifList
