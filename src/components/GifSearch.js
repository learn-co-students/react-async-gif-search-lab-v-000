import React, { Component } from 'react'

class GifSearch extends Component {

    state = {
      term: ""
    }

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.fetchGifs(this.state.term)
    }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})} />
      </form>
    )
  }
}

export default GifSearch
