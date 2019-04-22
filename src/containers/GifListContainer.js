import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends Component {

  state = {
    images: []
  }

  fetchGIFs = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({
          images: data.map( image => image.images.original.url )
        })
      })
  }

  componentDidMount() {
    this.fetchGIFs()
  }

  render() {
    return (
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs}/>
        <GifList images={this.state.images}/>
      </div>
    );
  }
}

export default GifListContainer;
