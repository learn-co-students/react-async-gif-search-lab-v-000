import React, { Component } from 'react';

export default class GifSearch extends Component {
  state = {
    query: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="query" value={this.state.query} onChange={this.handleChange}/>
      </form>
    )
  }
}
