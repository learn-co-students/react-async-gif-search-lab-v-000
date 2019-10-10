import React from 'react';

class GifSearch extends React.Component {
  state = {
    searchTerm: ""
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchTerm)
  }

  onChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    },console.log(event.target.value))
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label> Enter a Search Term: </label>
        <br />
        <input type="text" onChange={this.onChange} value={this.state.searchTerm} />
        <input type="submit" value="Find Gifs" />
      </form>

    )
  }
}

export default GifSearch;
