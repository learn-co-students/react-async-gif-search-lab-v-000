import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {

  state = {
    gifs: []
  };

  componentDidMount() {
    this.getGifs()
  }

  render() {
    return (
      <div>
        <GifSearch getGifs={this.getGifs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  getGifs = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=4`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({url: gif.images.original.url }) )})
      })
  }
}

export default GifListContainer;
