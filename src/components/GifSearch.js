// create your App component here

import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    search: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchGifs(this.state.search);
  }

  render() {

      return (
        <form onSubmit={(event) => this.handleSubmit(event)}>
          Search: <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
          <input type="submit"/>
        </form>
      )

  }

}

export default GifSearch;
