import React, { Component } from 'react';

class GifSearch extends Component {

  constructor() {
    super()
    this.state = {
      word: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.search(this.state.word)
  }

  handleChange = (e) => {
    this.setState({
      word: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default GifSearch;
