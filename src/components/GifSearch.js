import React, { Component } from 'react'


class GifSearch extends Component {


  state = {
    searchGifs: ""
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.searchGifs)
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
