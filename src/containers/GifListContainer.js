import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      giphyurls: [],
      searchTerm: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetcher();
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.giphyurls === nextState.giphyurls) {
      return false;
    }
    return true;
  }

  fetcher() {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=UrliqLjvjqls5SWgqQfXFIkQsOEJyegf&limit=3`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          giphyurls: json.data,
        });
      });
  }

  render() {
    return (
      <div>
        <GifSearch
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <div>
          <GifList data={this.state.giphyurls} />
        </div>
      </div>
    );
  }
}

export default GifListContainer;
