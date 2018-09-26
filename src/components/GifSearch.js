import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    query: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query);
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" value={this.state.query} onChange={event => this.handleChange(event)} />
      </form>
    );
  }

}
