import React, { Component } from 'react';

class GifSearch extends Component {
  state={
    searchTerm: ""
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newTerm = this.state.searchTerm
    let url = 'http://api.giphy.com/v1/gifs/search?q='
    url += newTerm
    url += '&api_key=HVbt6kbFF6EBsKQe8i3nmsMMI6CjzUab&rating=g&limit=3'
    this.props.genSearch(url)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">
        <h3>Enter a search term:</h3>
        <input type="text" onChange={this.handleChange} value={this.state.searchTerm}/>
        <input type="submit" />
      </form>
    )
  }
}

export default GifSearch
