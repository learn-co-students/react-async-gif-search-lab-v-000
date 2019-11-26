import React, { Component } from 'react';

import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';

export default class GifListContainer extends Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    };
  }

  render() {
    return (
      <section >
        < GifSearch handleSubmit={this.handleSubmit}/>
        < GifList gifs={this.state.gifs}/>
      </section>
    )
  }

  getGifList = (query) => {
    let apiKey = 'aYWje6NEZu4ZGzP21Pc5nTS4qvO3ypL5'
    let url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`

    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({
        gifs: [...json.data].slice(0, 3)
      })
    })
  }

  handleSubmit = (query) => {
    this.getGifList(query);
  }
}
