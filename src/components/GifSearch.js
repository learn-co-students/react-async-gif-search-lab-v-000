import React, {Component} from 'react'

export default class GifSearch extends Component {

  state = {
    searchTerm: ""
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.searchTerm)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
      </form>
    )
  }

}
