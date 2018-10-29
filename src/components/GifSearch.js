import React from 'react'


class GifSearch extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(event.target.children[0].value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="textarea"/>
        <input type="submit"/>
      </form>
    )
  }
}

export default GifSearch;
