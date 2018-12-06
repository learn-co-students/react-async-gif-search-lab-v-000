import React, { Component } from 'react'

export default class GifList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.gifs.map((gif, i) => <li key={i}><img src={gif} alt="gif" /></li>)}
        </ul>
      </div>
    )
  }
}
