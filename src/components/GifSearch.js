import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    textInput: ''
  }

  clickSubmit = (event) => {
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
      <span>
        <form onSubmit={this.clickSubmit}>
          <label>Enter a Search Term:</label>
          <input type="text" name="textInput" value={this.state.textInput} onChange={this.handleChange}/>
          <input type="submit" value="Find Gifs" />
        </form>
      </span>
    )
  }
}

export default GifSearch
