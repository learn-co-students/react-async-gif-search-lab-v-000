import React, { Component } from 'react'

export default class GifList extends Component {

  render(){
    if(this.props.gifs){
      const gifs = this.props.gifs
      return (
        <ul>
          {gifs.map(function(g, idx){
             return (<li key={idx}><img src={g.images.original.url} alt="animated gif"/></li>)
           })}
        </ul>
      )
    }
  }
}
