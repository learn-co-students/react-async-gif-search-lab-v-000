import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }

  handleSubmit = search => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data
        });
      });
  };
}

export default GifListContainer;
