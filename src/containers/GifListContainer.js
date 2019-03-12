import React from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  render() {
    return (
      <div>
        < GifList gifs={this.state.gifs} />
        < GifSearch onSearchSubmit={this.onSearchSubmit} />
      </div>
    )
  }

  componentDidMount() {
    this.onSearchSubmit();
  }

  onSearchSubmit = (query = 'DragonBall') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(resp => resp.json())
      .then(data => this.setState({ gifs: data.data }));
  }
}

export default GifListContainer;
