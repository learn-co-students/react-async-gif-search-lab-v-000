import React, { Component } from 'react';

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.input)
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input onChange={event => this.handleChange(event)} type="text" name="query" value={this.state.input} />
          <input type="submit" value="submit" name="submit" />
        </form>
      </div>
    )
  }
}

export default GifSearch
