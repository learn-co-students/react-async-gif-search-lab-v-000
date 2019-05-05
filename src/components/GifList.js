import React from 'react'

class GifList extends React.Component {
  // this.props.gifs

  render() {
    return(
      <div>
        <li><img alt={this.props.gifURL} src={this.props.gifURL} /></li>
      </div>
    )
  }
}

export default GifList
