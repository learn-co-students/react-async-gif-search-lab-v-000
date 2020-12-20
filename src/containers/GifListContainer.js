import React, { Component } from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  constructor() {
    super()
    // this.fetchGifs = this.fetchGifs.bind(this);
    this.state = { gifs: [] };
  }

  fetchGifs(event) {
    const query = event.target[0].value;
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_API_KEY}&rating=g`)
    .then(response => (response.json()))
    .then(data => {
      data.data.forEach(datum => {
        console.log('datum.images.original.url:', datum.images.original.url);
      })
    });
  }

  render() {
    return (
      <div>
        < GifSearch handleSubmit={this.fetchGifs} />
        < GifList />
      </div>
    )
  }
}

export default GifListContainer