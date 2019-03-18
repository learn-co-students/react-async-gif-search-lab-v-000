import React, { Component } from 'react';

class GifList extends Component {

  render() {
    return (
      <ul>
        <li><img src={this.props.gifList[0].images.original.url} alt={this.props.gifList[0].images.original.url}/></li>
        <li><img src={this.props.gifList[1].images.original.url} alt={this.props.gifList[1].images.original.url}/></li>
        <li><img src={this.props.gifList[2].images.original.url} alt={this.props.gifList[2].images.original.url}/></li>
      </ul>
    )
  }
}

export default GifList;
