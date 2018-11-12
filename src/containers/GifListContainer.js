import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";
 class GifListContainer extends Component {
  state = {
    gifs: []
  };

  render() {
    return (
      <div>
        <GifSearch fetchGifs = {this.fetchGifs} />
        <GifList gifs = {this.state.gifs}/>
      </div>
    );
  }

  fetchGifs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(result => result.json())
    .then(data => {
      this.setState({
        gifs: data.map(datum => datum.images.original.url)
      })
    })
  }
export default GifListContainer
