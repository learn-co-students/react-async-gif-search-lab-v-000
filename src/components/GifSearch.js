// render a form that receives the user input for the giphy search. 
// receive a callback prop from its parent. 
// On a submit event, it should invoke that callback prop with the value of the text input. 
// It is this callback function, defined in <GifListContainer />, that will actually query the API with the text the user has entered.
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
          <label>Enter a Search Term </label>
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