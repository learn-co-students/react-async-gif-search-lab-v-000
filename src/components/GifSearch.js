/*

It will also render a <GifSearch /> component that renders the form. 
<GifListContainer /> should pass down a 
submit handler function to <GifSearch /> as a prop

*/

import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor(){
    super()
    this.state = {
      query: ""
    }
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
    //callback prop with query argument
    e.preventDefault();
    this.props.sendQuery(this.state.query)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Enter a Search Term</label>
        <input 
          type="text" 
          name="query" 
          value={this.state.query}
          onChange={this.handleChange}></input>
      </form>
    )
  }


}