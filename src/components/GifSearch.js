import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    query: ''
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  handleChange = ev => {
    this.setState({ query: ev.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.query} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
