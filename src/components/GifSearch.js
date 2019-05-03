import React, { Component } from 'react'


class GifSearch extends Component {

  state = {
    searchGifs: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.value)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    return (
      <div>
      <form onSubmit= {this.handleSubmit}>
        <input type="text" name="searchGifs" value={this.state.searchGifs} onChange={this.handleChange}/>
        <br/>
        <input type="submit" value="Find Gifs"/>
        </form>
      </div>
    )
  }
}





export default GifSearch
