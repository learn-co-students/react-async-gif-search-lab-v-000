import React, { Component } from 'react';

class GifList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.gifs.map(gif => (
            <li><img src={gif.url} alt="" /></li>
          ))}
        </ul>
      </div>
    )
  }

}

export default GifList;
