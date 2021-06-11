// Entire file --> Meg code
import React, { Component } from 'react'

export default class GifSearch extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>What GIFs do you want to search for?</label><br/>
        <input
          type="text"
          name="searchTerm"
          onChange={this.props.handleChange}
          value={this.props.formData.searchTerm}
        /><br/>
        <button type="submit">Find GIFs</button>
      </form>
    )
  }
}