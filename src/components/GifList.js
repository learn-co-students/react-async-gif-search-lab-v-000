import React from 'react'

class GifList extends React.Component {
  render () {
    return (
      <ul>
        {this.props.gifs.map(gif => <li><img src={gif}/></li>)}
      </ul>
    )
  }
}

export default GifList;
