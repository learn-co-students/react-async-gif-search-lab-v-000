import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
  state = {
    query: "",
    gifs: []
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          gifs: json.data
        })
      })
  }
}

export default GifListContainer
