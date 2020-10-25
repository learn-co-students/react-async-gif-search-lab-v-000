import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    search: []
  }

  handleChange(event) {
    this.setState({
        search: event.target.value
      })
  }

  render() {
    return (
        <form onSubmit={event => this.props.submitHandle(event, this.state.search)}>
            <label name="search">GIF Search</label>
            <input type="text" name="search" value={this.state.search} onChange={event => this.handleChange(event)}/>
        </form>
    );
  }
}

export default GifSearch;