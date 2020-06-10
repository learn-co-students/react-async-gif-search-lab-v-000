import React, { Component } from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  state = {
    gifs: [],
    searchTerm: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          gifs: json.data.slice(0, 3)
        })
      })
  }

  // Should class information go here even though it's the container? Can't figure out how to seamlessly incorporate it otherwise.
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <GifList gifs={this.state.gifs} />
          </div>
          <div className="col-sm-2">
          </div>
          <div className="col-sm-4">
            <GifSearch 
              searchTerm={this.state.searchTerm}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
