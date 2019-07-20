import React, { Component } from 'react'

export default class GifList extends Component {

  render(){
    return this.props.gifs.map(x => <img key={x.url} src={x.url}/> )
  }
 
}