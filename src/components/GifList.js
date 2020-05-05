import React, { Component } from 'react';

class GifList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        {this.props.gifs.map(gif => {return <li><img key={gif.images.original.url} src={gif.images.original.url}/></li>})}
      </ul>
    )
  }


}

export default GifList
