import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
  constructor() {
    this.state = {gifs: undefined}
  }

  search = (query) => fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(resp => console.log(resp));

  render() {
    return (
    <div>
      <GifSearch search={this.search}/>
      <GifList gifs={this.state.gifs}/>
    </div>
    )
  }
  
}