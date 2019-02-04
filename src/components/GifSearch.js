import React, {Component} from 'react';

export default class GifSearch extends Component {
  constructor () {
    super()
    this.state = {
      search : ''
    }
  }

  searchUpdate = (event) => {
    this.setState({
      [event.target.id] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.searchSubmit(this.state.search)
  }

  render () {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="search" onChange={this.searchUpdate} value={this.state.search}/>

        <input type="submit" value="Search!" />
      </form>
    )

  }


}
