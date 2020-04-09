import React, { Component } from 'react'


class GifList extends Component{
render(){
  const images = this.props.gifs.map(image => <li> <img key={image} src={image} alt="gif"/></li>)

  return (
  <div>
  <ul>

  {images}
  </ul>
  </div>
)
}}

export default GifList
