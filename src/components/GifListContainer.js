import React from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends React.Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    this.searchGif();
  }

  searchGif = (word = "dolphin") => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({
          gifs: data.slice(0, 3).map(gif => ({ url: gif.images.original.url }))
        });
      });
  };

  render() {
    return (
      <div>
        <GifSearch searchGif={this.searchGif} />
        <GifList gifList={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
