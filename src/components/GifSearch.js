import React, { Component } from 'react';

class GifSearch extends Component {

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.props.searchValue} onChange={this.props.handleChange} />
       <input type="submit" value="submit" />
      </form>
      )
    }
}

export default GifSearch
