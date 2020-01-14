  import React, { Component } from 'react'

   class GifSearch extends Component {

     state = {
      query: ""
    }

    handleSubmit = event => {
      event.preventDefault()
      this.props.handleFetch(this.state.query)
    }

  render() {
    return (
      <div>
        <form onSubmit= {this.handleSubmit}>
          <input
            placeholder="Enter a Search Term"
            type="text"
            value={this.state.query}
            onChange={event => this.setState({query: event.target.value})} />
          <input type="Submit" />
        </form>
      </div>
    )
  }
}

export default GifSearch
