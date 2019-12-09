import React from 'react';

class GifList extends React.Component {
  render() {
    return (
      <ul>{this.props.gifList.map((gif, index) => <li key={index}><img src={gif.images.original.url} /></li>)}</ul>
    );
  }
}

export default GifList;