import React, { Component } from "react";

class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Enter a Search Term:
            <input
              type="text"
              value={this.props.searchTerm}
              onChange={this.props.handleChange}
            />
          </label>
          <input type="submit" value="Find Gifs" />
        </form>
      </div>
    );
  }
}

export default GifSearch;
