import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    search: " "
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.search)
  }

  handleChange = event => {
    event.persist()
    this.setState({
      search: event.target.value
    })
  }


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.search} onChange={this.handleChange}/>
   </form>
      </div>
    )
  }

}


export default GifSearch;
