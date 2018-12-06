import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    searchVal: ''
  }

  handleChange = (event) => {
    this.setState({
      searchVal: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.searchVal);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="searchVal" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}
