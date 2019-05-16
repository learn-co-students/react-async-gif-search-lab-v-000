import React, { Component } from 'react';


export default class GifSearch extends Component {
  state = {
    query: ''
  }

  handleChange = (event) => {
    event.persist();
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitQuery(this.state.query)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.query}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }

}
