import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    searchTerm: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.search(this.state.searchTerm)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event) }>
        <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
        <button>Get GIFs!</button>
      </form>
    )
  }

}
