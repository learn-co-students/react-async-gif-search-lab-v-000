import React, { Component } from 'react'


class GifList extends Component{
render(){
    console.log(this.props.gifs)
  return (
  <div>
  <ul>

  <li><img src={this.props.gifs}></img></li>
   <li><img src={this.props.gifs}></img></li>
  </ul>
  </div>
)
}}

export default GifList
