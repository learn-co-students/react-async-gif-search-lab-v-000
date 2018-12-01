import React, { Component } from 'react';

export default class GifSearch extends Component {
  constructor() {
    super();

    this.state = {
      query: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getGifs(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" onChange={this.handleChange} />
        <input type="submit" className="btn btn-success" value="Find gifs" />
      </form>
    )
  }
}
