import React, { Component } from 'react';


export default class GifSearch extends Component {

  state = {
    searchTerm: ""
  }

  getSubmit = event => {
    event.preventDefault()
    this.props.getGIFS(this.state.searchTerm)
  }

render() {
  return(
    <form onSubmit={this.getSubmit}>
      <input type="text" value={this.state.searchTerm} onChange = {event => this.setState({searchTerm: event.target.value})} />
    </form>
    )
}



}
