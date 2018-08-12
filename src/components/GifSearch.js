import React, { Component } from 'react';

class GifSearch extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} >
      <label>
      Search for GIF:
      <input type="text" name="search" value={this.props.searchValue} onChange={this.props.handleChange} placeholder="Search" />
      </label>
      <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default GifSearch
