import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  constructor() {
    super()

    this.state = {
      gifList: [],
    }
  }

  getGifs = searchTerm => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        let threeGifs = []
        threeGifs.push(data.data[0], data.data[1], data.data[2])
        this.setState({
          gifList: threeGifs
        })
      })
  }

  render() {
    if (this.state.gifList.length > 0) {
      return (
        <div>
          <GifList gifList={this.state.gifList} />
          <GifSearch submitHandler={this.getGifs} />
        </div>
      )
    } else {
      return (
        <div>
          <GifSearch submitHandler={this.getGifs} />
        </div>
      )
    }
  }
}

export default GifListContainer;
