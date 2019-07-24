import React, {Component} from 'react'


class GifList extends Component {
  render() {
    return(
      <ul>{this.props.gifs}</ul>
    )
  }
}

export default GifList
