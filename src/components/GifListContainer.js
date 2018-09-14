import React, { Component } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      search: ""
    };
  }

  handleSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleThis = () => {
    const search = this.state.search;
    const root = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`;

    fetch(root)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          gifs: myJson.data
        });
        // console.log(myJson);
      });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <GifSearch
          search={this.handleSearch}
          haveSome={this.state.search}
          performSearch={this.handleThis}
        />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
