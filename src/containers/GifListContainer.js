import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  
  state = {
    gifs: [],
    query: null
  }
  
  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        I'm what you're looking for: {this.state.query}
        <GifList />
      </div>
    )
  }

  handleSubmit = (event, formData) => {
    event.preventDefault()
    this.setState({
      query: formData.query
    })
    fetch(`http://api.giphy.com/v1/gifs/search?q=${formData.query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(gifs => {
        this.setState({
          
        })
      })
    
  }
}