import React, {Component} from 'react'

class GifSearch extends React.Component {
  state = {
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.searchTerm)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='searchTerm'>Enter a Search Term:</label> <br />
        <input 
          type='text' id='searchTerm' 
          value={this.state.searchTerm} 
          onChange={this.handleChange}
        /> <br />
        <input type='submit' value='Find Gifs' /> <br />
      </form>
    );
  }
}

export default GifSearch
