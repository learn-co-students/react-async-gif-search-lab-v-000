import React, { Component } from "react";

class GifSearch extends Component {

  render() {
    return (
      <React.Fragment>
        <h3>Search for a GIF!</h3>
        <form>
          <input
            type="text"
            id="input"
            onChange={this.props.handleChange}
            value={this.props.query}
          />
          <button type="button" id="button" onClick={this.props.handleSearch}>
            Search
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default GifSearch;
