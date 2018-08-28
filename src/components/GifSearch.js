import React, { Component } from "react";

export default class GifSearch extends Component {
  constructor() {
    super();
    this.state = {query: ""};
  }

  render() {
    return (
      <form onSubmit={(event) => {event.preventDefault();this.props.search(this.state)}}>
        <input type="text" value={this.state.query} onChange={(event) => this.setState({query: event.target.value})}/>
        <input type="submit"/>
      </form>
    )
  }
}