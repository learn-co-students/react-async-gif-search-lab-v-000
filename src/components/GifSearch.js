import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor() {
    super()
    
    this.state = { query: ""}
  }
  
  render() {
    return (
      <form className="form-group"
            onSubmit={e => this.handleSubmit(e)}>
        <input type="text"
               id="query"
               className="form-control"
               placeholder="Search"
               onChange={e => this.handleChange(e)} />
        <button type="submit"
                className="btn btn-primary">Search</button>
      </form>
    )
  }

  handleChange = e => {
    this.setState({query: e.target.value})
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.submitHandler(this.state.query)
  }
}