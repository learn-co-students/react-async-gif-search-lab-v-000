import React, { Component } from "react";

export default class GifSearch extends Component {
  constructor() {
    super();
    this.state = {query: ""};
  }

  render() {
    <form onSubmit={this.props.search.bind(null,this.state.query)}>
      <input type="text" value={this.state.query} onChange={(event) => this.setState({query: event.target.value})}/>
      <input type="submit"/>
    </form>
  }
}