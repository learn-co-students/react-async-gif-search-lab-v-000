import React, { Component } from 'react';

export default class GifSearch extends Component {
  state = {
    textInput: ''
  }

  clickSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.textInput)
  }

  handleChange = event => {
    this.setState({
      textInput: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.clickSubmit}>
        <label>Enter a Search Term:</label>
        <input type="text" value={this.state.textInput} name="textInput" onChange={this.handleChange} />
        <input type="submit" value="Find GIFs" />
      </form>
    )
  }
}
