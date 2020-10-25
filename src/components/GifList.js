import React, { Component } from 'react';

class GifList extends Component {

  state = {
    test: []
  }

  render() {
    return (
      <ul>
        {this.props.gifs.map(data => <li><img src={data.images.original.url} alt='GIF' /></li>)}
      </ul>
    );
  }
}

export default GifList;
