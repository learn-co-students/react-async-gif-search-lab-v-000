import React, { Component } from 'react';

class GifList extends Component {

  render() {
    return (
      <ul>
        {this.props.gifs.map(gif => {
          return (
            <li>
              <img src={gif.url} alt="gif" />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default GifList
