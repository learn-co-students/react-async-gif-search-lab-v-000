import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    searchValue: ""
  }

  handleChange = event => this.setState({searchValue: event.target.value})

  handleSubmit = event => {
    event.preventDefault()
    this.props.findGifs(this.state.searchValue)
  }

  render(){
    return(
  <div>
    <form onSubmit={this.handleSubmit} >
        <input type="text" name="searchValue" value={this.state.searchValue} onChange={this.handleChange}/>
        <input type="submit" value="Search"/>
    </form>
  </div>
    )
  }



}
