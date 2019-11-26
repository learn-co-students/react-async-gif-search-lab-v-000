import React, { Component } from 'react';

export default class GifList extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.liGenerator()}
        </ul>
      </div>
    )
  }

  liGenerator = () => {
    let gifs = this.props.gifs.map(gif => {
      return <li key={gif.images.original.url}><img src={gif.images.original.url} alt={gif.name}></img></li>
    })
    return gifs;
  }
}
