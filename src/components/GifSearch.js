import React, { Component } from 'react';

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    }
  }


  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="search" value={this.state.search} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value

    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.sendSearchQuery(this.state.search)
  }
}

export default GifSearch
