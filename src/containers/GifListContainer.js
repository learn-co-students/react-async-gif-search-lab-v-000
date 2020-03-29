import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class extends Component {
  state = {
    images: []
  };

  handleSubmit = query => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=wBNQzOeyyEKTgkzHmpBGIkiYSQrmWFzy`
    )
      .then(response => response.json())
      .then(({ data }) => {
        const images = data.slice(0, 3);
        this.setState({ images });
      });
  };

  render() {
    const { images } = this.state;
    return (
      <div className="gif-list__container">
        <GifSearch onSubmit={this.handleSubmit} />
        <GifList images={images} />
      </div>
    );
  }
}
