import React from 'react'

export default class GifSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      searchQuery: ""
    }
  }

  handleChange = event => {
    this.setState({ searchQuery: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.searchQuery)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.searchQuery}></input>
        <input type="submit"></input>
      </form>
    )
  }
}