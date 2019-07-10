import React, { Component } from 'react';

class GifList extends Component {
  render() {
    return(
      <ul>
      {this.props.gifs.map((gif, index) =>
      <li key={index}>
      <img src={gif} />
      </li>
    )}
    </ul>
    )
  }
}

export default GifList
