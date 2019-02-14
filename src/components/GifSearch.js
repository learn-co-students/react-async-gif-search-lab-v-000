import React from 'react';

export default class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = {value: ''}
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchData(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value= "Search"/>
      </form>
    )
  }
}
