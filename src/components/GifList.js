import React from 'react';

class GifList extends React.Component {
  render() {
    return(
      <div>
        {this.props.gifs.map(gif =>
          <img src={gif.url} />
        )}
      </div>
    )
  }
}

export default GifList;
