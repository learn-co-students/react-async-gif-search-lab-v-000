import React, { Component } from 'react'

const GifList = (props) => {
  return (
    <div>
    <ul>
      {props.storedGifs.map(gif => <li> <img src= {gif.url} /> </li>) }
    </ul>
    </div>
  )
}

export default GifList
