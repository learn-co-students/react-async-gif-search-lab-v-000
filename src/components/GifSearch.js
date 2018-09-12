import React from 'react'


class GifSearch extends React.Component {
  state = {
    searchTerm: ''
  }


  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.searchTerm)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Enter a Search Term:
          <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
        </label>
        <input type="submit" value="Find Gifs" />
      </form>
    )
  }
}

export default GifSearch
