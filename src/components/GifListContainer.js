import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  // list of GIFs
  state = {
    gifs: []
  };

  updateResults = (searchTerm) => {
    // clear our GIF results
    this.setState({
      gifs: []
    });

    // start FETCH request
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(response => response.json())
      .then(results => {
        // update state with first 3 GIF results
        this.setState({
          gifs: results.data.slice(0, 3)
        });
      });
  }

  render() {
    return (
      <div>
        <GifSearch updateResultsFn={this.updateResults} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
