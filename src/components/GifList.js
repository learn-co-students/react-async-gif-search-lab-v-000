import React, { Component } from 'react';

export default class GifList extends Component {
  render() {
    const gifs = this.props.gifs.map((gif) => {
      return (
        <li>
          <img src={gif}/>
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
