import React, { Component } from 'react';


export default class GifSearch extends React.Component {

  state= {
    input: ""
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.input)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" onChange={event => this.handleChange(event)} value={this.state.input}/>
          <button type="submit">Search</button>
        </div>
      </form>
    );
  }

}
