import React, {Component} from 'react'


class GifList extends Component {
  state = {search: " "}

  handleSearch = (event) => {
    this.setState({search: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleFetch(this.state.search)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.search} onChange={this.handleSearch}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default GifList
