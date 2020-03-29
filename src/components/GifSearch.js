import React, { Component } from "react";

export default class extends Component {
  state = {
    search: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
