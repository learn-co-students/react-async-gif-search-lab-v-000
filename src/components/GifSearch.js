import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleQueryChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
      <label>Enter a Search Term:</label>
      <input type="text" name="query" value={this.state.query} onChange={event => this.handleQueryChange(event)} />
      <input type="submit" value="Find Gifs" />
      </form>
    );

  }
}


export default GifSearch
