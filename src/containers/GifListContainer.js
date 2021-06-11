// Entire file --> Meg code
import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
  state = {
    searchTerm: "",
    gifs: []
  }
  
  async newSearch(param) {
    return await fetch(`https://api.giphy.com/v1/gifs/search?q=${param}&api_key=5zVDO44klrgGhpC38Chbqe7anTxdMDTx`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          gifs: this.parseData(json.data)
        })
      })
  }
  
  // Parse the data returned by the Giphy API (limit to first 3 results)
  parseData(data) {
    const sanitizedData = data.slice(0, 3);
    const images = sanitizedData.map((s) => {
      return s.images.original
    })
    return images
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchTerm)
    this.newSearch(this.state.searchTerm)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        < GifSearch formData={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /><br />
        < GifList searchData={this.state} />
      </div>
    )
  }
}