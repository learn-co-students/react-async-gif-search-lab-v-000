import React, {Component} from 'react'

class GifList extends React.Component {
  render() {
    const gifMap = this.props.gifs.map(gif => {
      return (
        <li key={gif}>
          <img src={gif} alt='' />
        </li>
      )
    })

    return (
      <ul>
        {gifMap}
      </ul>
    );
  }
}

export default GifList
