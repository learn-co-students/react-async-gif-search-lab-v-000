import React, { Component } from 'react'

class GifSearch extends React.Component {

  state = {
    keyword: ''
  }

  handleChange = event => {
    this.setState({
      keyword: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.searchGifs(this.state.keyword)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Enter a search term:
            <input id="keyword" type="text" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Find Gifs</button>
        </div>
      </form>
    );
  }

}

export default GifSearch
