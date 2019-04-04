import React, { Component } from 'react';


class GifList extends Component {



  render() {
    return (
    <div className="List">
      <h1>Gifs</h1>
      <div className="Gifs">
      <ul>
        {this.props.gifs.map(gif => <li><img src={gif.images.original.url}/></li>)}
        </ul>
      </div>

    </div>
  )}

}
export default GifList;
