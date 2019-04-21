import React, { Component } from 'react';

export default class GifList extends Component {

  render() {
    return (
      <ul>
        {this.props.gifsList.map((gif, index) =>
          <li key={index}>
            <img src={gif} />
          </li>
        )}
      </ul>
    )
  }
}
