import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    this.queryApi();
  }

  queryApi(query = "charmander") {
    let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=6AXYAUFuKcP9XpmEevxVe27vRHLz8B7t&rating=g`
    fetch(url)
      .then(response => response.json())
      .then(data => this.handleFetch(data))
  }

  handleFetch(data) {
    this.setState({
      gifs: [
        { url: data.data[0].images.original.url },
        { url: data.data[1].images.original.url },
        { url: data.data[2].images.original.url }
      ]
    })
  }

  handleSearch = query => {
    this.queryApi(query);

  }

  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSearch={this.handleSearch}/>
      </div>
    )
  }
}
