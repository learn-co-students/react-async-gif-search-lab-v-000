import React, { Component } from 'react'

class GifSearch extends Component {
  state = {
    searchTerm: ""
  }

  handleSearch = event => {
    event.preventDefault()
    this.props.getGifs(this.state.searchTerm)
    }

  render() {
    return (
      <form onSubmit={this.handleSearch}>
      <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
      </form>
  )}
}

export default GifSearch
