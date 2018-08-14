import React, {Component} from 'react'

class GifSearch extends Component {
  state = {
    query: ''
  };

  handleOnChange = (event) => {
    this.setState({
      query: event.target.value
    })
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.query)
    this.setState({
      query: ''
    })
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} onChange={this.handleOnChange}>
        <label htmlFor='search'>Search terms</label>
        <input id='search' value={this.state.query} type='text'/>
        <input type='submit'/>
      </form>
    )
  }
}
export default GifSearch

