import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for='searchInput'>Enter a Search Term:</label><br></br>
          <input id='searchInput' type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} /><br></br>
          <button onClick={this.handleSubmit}>Find Gifs</button>
        </form>
      </div>
    )
  }

}

export default GifSearch