import React from 'react';

export default class GifSearch extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" name="query" /> 
        <input type="submit" />
      </form>
    )
  }
}