import React, { Component } from 'react'
import GifSearch from './GifSearch'


export default class GifList extends Component{


displayGifs= ()=>{
  return this.props.data.map(g=>{
    let url = g.images.original.url
    return  <li><img src= {url}/></li>
  })
}



  render(){
    return(
      <div>
      <ul>
      {this.displayGifs()}
      </ul>

      Heya
      </div>
    )
  }
}
