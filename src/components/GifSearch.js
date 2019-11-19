import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
      query: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetch(this.state.query)
  }

  handleOnChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search GIFs
          <input type="text" value={this.state.query} onChange={this.handleOnChange} />
        </label>
          <input type="submit" value="Search" />
      </form>
    )
  }
}
