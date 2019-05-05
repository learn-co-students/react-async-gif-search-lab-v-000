import React, {Component} from 'react';

class GifSearch extends Component {

  state = {
    search: '',
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.fethGifs(this.state.search)
  }

  handleChange = event => {
    this.setState({
      search: event.target.search,
    });
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
      <input
        type ="text"
        value={this.state.search}
        onChange={this.handleChange}
        />
        </form>
    )
  }
}

export default GifSearch
