import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    input: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.input)
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            id="userInput"
            type="text"
            name="userInput"
            onChange={this.handleChange}
           />
        </form>
      </div>
    )
  }
}

export default GifSearch
