import React from 'react'

class GifSearch extends React.Component {

  state = {
    search : ""
  }

  handleInputChange = (event) => {
    let searchWord = event.target.value
    this.setState({
      search: searchWord
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSearchGifs(this.state.search)
  }


  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" onChange={this.handleInputChange} value={this.state.search} />
        <button onClick={event => this.handleSubmit(event)}>Find Gifs</button>
      </form>
    )
  }
}

export default GifSearch
