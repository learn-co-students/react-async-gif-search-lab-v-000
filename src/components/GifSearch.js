import React from 'react';

export default class GifSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" name="query" value={this.state.text} onChange={this.handleChange} /> 
        <input type="submit" />
      </form>
    )
  }
}