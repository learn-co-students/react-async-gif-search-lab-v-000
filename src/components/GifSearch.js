import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor() {
    super() 
    this.state = {
      query: ""
    }
  }

  handleChange = (event) => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <input type="text" name="query" value={this.state.query} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }

}