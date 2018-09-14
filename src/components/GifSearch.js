import React, { Component } from "react";

export default class GifSearch extends Component {
  handleChange = e => {
    this.props.search(e);
  };

  handleClick = e => {
    e.preventDefault();
    this.props.performSearch();
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Seach Gifs:
            <input
              onChange={this.handleChange}
              type="text"
              value={this.props.haveSome}
            />
          </label>

          <input type="submit" onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}
