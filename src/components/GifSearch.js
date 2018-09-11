import React, { Component } from 'react';

export default class GifSearch extends Component {
  constructor() {
    super()

    this.state = {
      query: ''
    }
  }

  submitForm = (e) => {
    this.props.handleSubmit(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type='text' value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
          <input type="submit"/>
        </form>
      </div>

    )
  }
}
