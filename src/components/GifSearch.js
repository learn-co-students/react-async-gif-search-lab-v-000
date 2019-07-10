import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ''
  }

  clickSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.query)
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.clickSubmit}>
        <input type="text"
        value={this.state.query}
        onChange={this.handleChange}
        />
      <input type="submit" />
      </form>
    )
  }
}

export default GifSearch
