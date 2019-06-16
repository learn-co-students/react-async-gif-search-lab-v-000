import React, { Component } from 'react';

class GifSearch extends Component {

  constructor() {
    super()
    this.state= {
      query: ''
    }
  }

  handleQuery = (event) => {
  this.setState({
    query: event.target.value
    })
  }

  callbackFunction = (event) => {
    event.preventDefault()
    this.props.handleSearch(this.state.query)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.callbackFunction}>
          <input label="search" onChange={this.handleQuery} value={this.state.query} ></input>
        </form>
      </div>
    );
  }

}

export default GifSearch;
