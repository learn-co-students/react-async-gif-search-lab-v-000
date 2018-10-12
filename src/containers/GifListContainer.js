import React from 'react';

import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    this.searchGifs();
  }

  searchGifs = (query = "") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=` + `${query}` + `&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(json => this.setState({gifs: this.parseImages(json)}))
  }

  parseImages = (json) => {
    return json.data.map(gif => {
      return gif.images.original.url;
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const q = event.target[0].value;
    this.searchGifs(q)
  }

  render() {
    return(
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
} 