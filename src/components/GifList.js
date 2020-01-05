import React from 'react'

export default class GifList extends React.Component {
  renderGifs() {
    return this.props.gifs.map(g => (
      <li><img key={g.url} src={g.url} alt='gif' /></li>
    ))
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderGifs()}
        </ul>
      </div>
    )
  }
}
