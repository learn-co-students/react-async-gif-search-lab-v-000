//renders a form that receives the user input for the giphy search. Text input
//should be controlled component that stores the value on the input- renders the
//DOM accordingly
import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({ query: event.target.value }) } />
        </form>
      </div>
    )
  }
}

export default GifSearch
