import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    query: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query);
  };

  handleSearch = event => {
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <strong>Enter a Search Term:</strong>
          <br />
          <input
            type="text"
            value={this.state.query}
            onChange={event => this.handleSearch(event)}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default GifSearch;
