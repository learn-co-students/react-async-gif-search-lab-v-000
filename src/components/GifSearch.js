import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  handleChange = event => {
    event.persist()
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      Enter a search term: <input type="text" value={this.state.query} onChange={this.handleChange} />
    </form>
    )
  }

}

export default GifSearch;
