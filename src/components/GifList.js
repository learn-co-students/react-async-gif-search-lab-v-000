import React, { Component } from 'react';

class GifList extends Component {

  showGifs = () => {
    if (this.props.data !== []) {
      return this.props.data.map(function (image) {
        return <li key={image.images.original.url}><img src={image.images.original.url} alt="Gif"/></li>
      })
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.showGifs()}
        </ul>
      </div>
    )
  }
}

export default GifList;
