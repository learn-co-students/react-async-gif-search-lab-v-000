import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';


class GifListContainer extends Component {
  constructor() {
    super();

    this.state = {
      gifList: [],
      searchItem: ""
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleSubmit.bind(this);
  }

  async fetchGifs() {

    //await fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC&rating=g`)
    await fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchItem}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ ...this.state, gifList: json.data.slice(0, 3) })
      });
  }

  handleChange = (e) => {
    this.setState({ ...this.state, searchItem: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchGifs();
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <GifList gifList={this.state.gifList} />
      </div>
    )
  }
}

export default GifListContainer;