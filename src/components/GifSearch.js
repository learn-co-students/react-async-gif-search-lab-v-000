import React from 'react'

class GifSearch extends React.Component {
  state = {
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.searchTerm)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Search for GIFs 
        <input className="d-block" type="text" value={this.state.searchTerm} onChange={this.handleChange} /></label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default GifSearch