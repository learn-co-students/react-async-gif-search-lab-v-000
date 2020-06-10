import React, { Component } from 'react';

export default class GifSearch extends Component {
  render() {
    return (
      <div>
        <form className="form-group" onSubmit={event => this.props.handleSubmit(event)}>
          <label>Enter a Search Term:</label>
          <input
            type="text"
            id="searchTerm"
            name="searchTerm"
            className="form-control"
            onChange={event => this.props.handleChange(event)}
            value={this.props.searchTerm}
          />
          <button type="submit" className="btn btn-success">Find Gifs</button>
        </form>
      </div>
    )
  }
}
