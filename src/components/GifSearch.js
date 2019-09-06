import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    query: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={e => this.setState({ query: e.target.value })} />
          <button> Search </button>
        </form>
      </div>
    );
  }
}

export default GifSearch;
