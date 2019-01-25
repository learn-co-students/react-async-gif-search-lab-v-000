import React, { Component } from 'react';

class GifSearch extends Component {
  // setting initial state - state object has a "keywords" key pointing to an empty string since the <input> text field to enter search terms is initially blank
  state = {
  	keywords: ''
  }

  handleFormSubmission = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.keywords)
  }

  handleChange = event => {
    this.setState({
      keywords: event.target.value
    })
  }

  render() {
  	return (
  	  <form onSubmit={this.handleFormSubmission}>
        <label>Enter a Search Term</label>:
        <br />
        <input type="text" value={this.state.keywords} onChange={this.handleChange} />
        <br />
        <input type="submit" value="Find Gifs"/>
  	  </form>
  	)
  }
}

export default GifSearch;

/*
// GifSearch component will render a form that receives the user input for the giphy search. 
// The text input should be a controlled component 
// that stores the value of the input in its component state and renders the DOM accordingly. 
// The React component is always in charge of what the DOM looks like.
// GifSearch should receive a callback prop from its parent. 
// On a submit event, it should invoke that callback prop with the value of the text input. 
// It is this callback function, defined in GifListContainer, that will actually query the api with the text the user has entered.
*/
  