import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
  state = {
    gifs: [],
    search: ""
  }

  fetchGifs() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then((response) => response.json())
      .then((json) => this.setState({ gifs: json.data.slice(0,3)}))
  }

  handleSearch(search) {
    this.setState({search: search},
    () => {
      this.fetchGifs()
    })
  }

  render(){
    return (
      <div>
        <GifSearch handleSubmit={(search) => this.handleSearch(search)} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
