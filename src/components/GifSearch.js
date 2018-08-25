import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    query: ''
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGIFs(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a search term:
          <input type="text" id="query" value={this.state.query} onChange={this.handleChange}></input>
        </label>
      </form>
    )
  }
}
