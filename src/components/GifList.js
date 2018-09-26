import React, { Component } from 'react'

export default class GifList extends Component {
  render() {
    return(
      <ul>
        {this.props.gifs.map((gif, ind) => (
          <li><img key={ind} src={gif.url} alt="" /></li>
        ))}
      </ul>
    );
  }
}
