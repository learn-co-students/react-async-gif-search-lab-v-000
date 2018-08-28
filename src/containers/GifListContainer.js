import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {gifs: []}
  }

  search = (params) => fetch(`http://api.giphy.com/v1/gifs/search?q=${params.query}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(resp => this.setState({gifs: resp.data.slice(0,3)}, () => console.log(this.state)));

  render() {
    return (
    <div>
      <GifSearch search={this.search}/>
      <GifList gifs={this.state.gifs}/>
    </div>
    )
  }
  
}