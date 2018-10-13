import React, { Component } from 'react';

export default class GifList extends Component {
  render() {
    const gifs = this.props.gifs.map((gif, key) => {
      return (
        <li>
          <img src={gif} alt={key} />
        </li>
      )
    });

    return (
      <ul>
        {gifs}
      </ul>
    )
  }
}
