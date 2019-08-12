import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    query: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  handleChange = e => {
    this.setState({query: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        value={this.state.query}
        onChange={this.handleChange}
        />
        <input type="submit" value="Find Gifs" />
      </form>
    );
  }
}

export default GifSearch;