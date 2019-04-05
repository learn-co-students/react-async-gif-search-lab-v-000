import React from 'react';

class GifList extends React.Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.gifs.map(gif =>
            <li>{gif.slug}<br></br>
            <img key={gif.id} src={gif.images.original.url} alt="gif"/>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default GifList;
