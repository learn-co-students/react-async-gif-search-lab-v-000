import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  componentDidMount() {
    this.getGifs()
  }

  getGifs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch getGifs={this.getGifs} />
      </div>
    )
  }
}

export default GifListContainer;
