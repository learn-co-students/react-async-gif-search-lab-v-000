import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    query: ""
  }

  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="query" value={this.state.query} onChange={this.handleChange} />
          <input type="submit" value="Find GIFs!" />
        </form>
      </div>
    )
  }
}