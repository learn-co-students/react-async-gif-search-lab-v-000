import React, { Component } from 'react';

export default class GifSearch extends Component {
  state = {
    searchTerm: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form className="form-group">
          <label>Enter a Search Term:</label>
          <input
            type="text"
            id="searchTerm"
            name="searchTerm"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
          <button type="submit" className="btn btn-success" onClick={event => this.props.handleSubmit(event, this.state.searchTerm)}>Find Gifs</button>
        </form>
      </div>
    )
  }
}
