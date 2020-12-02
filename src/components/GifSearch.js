import React, { Component } from 'react';

class GifSearch extends Component {
  
  state = {
    searchTerm: ""
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label>Enter a search word </label>
        </div>
        <div>
          <input 
            type="text" 
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleInputChange}></input>
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    )
  }
}

export default GifSearch