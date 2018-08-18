import React from 'react';

class GifList extends React.Component {
  
  renderGifs = () => {
    return this.props.gifs.map((gif)=> <li key={gif.url}><iframe src={gif.embed_url} title={gif.slug} /></li>);
  }
  
  render() {
    return (
      <ul>
        {this.renderGifs()}
      </ul>
    );
  }
}

export default GifList;