import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    value: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.value)
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render(){
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" value={this.state.value} onChange={this.handleChange} name="search"/>
        <input type="submit" className="btn btn-primary" value="Find Gifs"/>
      </form>
    )
  }
}
