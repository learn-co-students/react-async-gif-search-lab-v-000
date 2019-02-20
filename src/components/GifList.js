import React, { Component } from 'react'

export default class GifList extends Component {
  createGifList = () => {
    if (this.props.gifs[0] !== undefined) {
      return this.props.gifs.map( gif => <li><img alt="" src={gif.images.original.url}></img></li>)
    }
  }

  render() {
    return(
      <ul>
        {this.createGifList()}
      </ul>
    )
  }
}
