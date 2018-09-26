import React, { Component } from 'react'

export default class GifList extends Component {
  render() {
    return (
      <div class='float-left'>
        <ul>
          {this.props.gifs.map(gif => (
          <li><img src={gif} /></li>
          ))}
        </ul>
      </div>
    )
  }
}