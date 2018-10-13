import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    this.searchGif('bunny');
  }

  searchGif(searchValue) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=dc6zaTOxFJmzC&rating=g`).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      const gifs = jsonResponse.data.slice(0, 3).map((gifData) => {
        return gifData.images.original.url
      });
      this.setState({gifs: gifs});
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchGif(event.target[0].value);
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
