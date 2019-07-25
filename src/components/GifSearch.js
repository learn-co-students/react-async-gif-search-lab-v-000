import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
    value: ''
  }

  handleClick = e => {
    e.preventDefault();
    this.props.fetchGifs(this.state.value);
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    return (
      <div style={{float:'right'}}>
        <p>Enter a Search Term:</p>
        <form>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={e => this.handleClick(e)}>Search</button>
      </div>
    )
  }
}

export default GifSearch;
