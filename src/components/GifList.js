import React, { Component } from "react";

export default class GifList extends Component {

  renderGifs = () => this.props.gifs.map((gif) => <li key={gif.id}><img src={gif.images.original.url}/></li>)

  render() {
    return (
      <ul>
        {this.renderGifs()}
      </ul>
    );
  }
}