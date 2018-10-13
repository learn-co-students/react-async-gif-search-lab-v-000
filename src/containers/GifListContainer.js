import React, { Component } from 'react';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q={bunny}&api_key=dc6zaTOxFJmzC&rating=g`).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      const gifs = jsonResponse.data.slice(0, 3).map((gifData) => {
        return gifData.images.original.url
      });
      this.setState({gifs: gifs});
    })
  }

  render() {
    return (
      <GifList gifs={this.state.gifs} />
    )
  }
}
