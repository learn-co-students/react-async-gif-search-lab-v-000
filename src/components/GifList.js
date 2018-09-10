import React, { Component } from 'react';

export default class GifList extends Component {
  gifList = () => {
    return this.props.gifs.map((gif) => <li> <img src={gif.url} title = {gif.slug} /> </li>)
  }
  render() {
    console.log(this.props.gifs)
    return (
      <div>Hey</div>

    )
  }
}
