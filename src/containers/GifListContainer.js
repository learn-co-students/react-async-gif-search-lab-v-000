import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  arrayIfy = (object) => {
    return object['data']
  }

  searchBar = (word) => {
    fetch('http://api.giphy.com/v1/gifs/search?q=' + word + '&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(data => {this.setState({data: this.arrayIfy(data)})})
  }

  render() {
    return (
      <div>
      <GifSearch search={this.searchBar} />
      <GifList data={this.state.data} />
      </div>
    )
  }
}

export default GifListContainer;
