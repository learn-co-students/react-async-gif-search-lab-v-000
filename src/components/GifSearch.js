import React, { Component } from "react";

 class GifSearch extends Component {
  state = {
    query: ""
  };

  handleSubmit = event =>
    {
      event.preventDefault()
      this.props.fetchGifs(this.state.query)
    }

  render(){
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.query}
          onSubmit={this.handleSubmit}
        />
      </form>
    )
  }
export default GifSearch
