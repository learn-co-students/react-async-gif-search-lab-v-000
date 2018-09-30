import React, { Component} from 'react';

export default class GifSearch extends Component {
  constructor(){
    super()
    this.state = { searchTerm: "" }
  }

  handleSearchTermChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleSearchTermChange}/>
          <button type="submit">Search!</button>
        </form>
      </div>
    )
  }
}
