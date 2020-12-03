import React, { Component } from 'react'

import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component {
  state = {
    query: '',
    gifs: []
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate() {
    this.fetchData()
  }

  fetchData = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`).then(response => response.json()).then(data => {
      this.setState({
        gifs: [ data.data[0], data.data[1], data.data[2]]
      })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // TODO: fill this out
    this.setState({
      query: event.target.firstChild.value
    })
  }

  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
