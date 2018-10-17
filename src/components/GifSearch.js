import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    value: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.value)
  }

  render() {
    return (
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <div>
            <label>
              Search Gifs: 
                <input type="text" value={this.state.value} onChange={ event => this.setState({value: event.target.value})}/>
              </label>
            </div>
        </form>
      </div>
    )
  }
}

export default GifSearch;
