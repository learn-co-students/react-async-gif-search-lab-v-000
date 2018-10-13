import React, { Component } from 'react';

export default class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} >
        <label>
          Search:
          <input type="text" name={this.state.searchValue} onChange={event => this.setState({searchValue: event.target.value})}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
