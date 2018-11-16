import React, {Component} from 'react'
 export default class GifList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.gifs.map(gif =>
          <li><img src={gif['images']['original']['url']} alt="gif" /></li>
        )}
      </ul>
    )
  }
}
