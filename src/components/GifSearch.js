import React, { Component } from 'react';

export default class GifSearch extends Component {
  constructor() {
    super()

    this.state = {
      inputText: ''
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label> Enter search term here:</label>
        <input type="text" value={this.state.inputText} onChange={(e) => this.handleChange(e)}></input>
      </form>
    )
  }

  handleChange = e => {
    this.setState({
      inputText: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state.inputText)
  }
}
