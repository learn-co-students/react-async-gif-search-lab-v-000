import React, { Component } from 'react'

const GifList = props => {
  return (<ul>
        {props.gifs.map(gif => (<li> <img src={gif.bitly_gif_url} alt="" /> </li>))}
    </ul>)
}


export default GifList