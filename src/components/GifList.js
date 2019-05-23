import React, { Component } from 'react';

class GifList extends Component {

  render() {
    return (
      <ul>
        {this.props.images.map((image, index) =>
          <li key={index}>
            <img src={image} />
          </li>
        )}
      </ul>
    );
  }
}

export default GifList;
