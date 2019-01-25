import React, { Component } from 'react';

class GifSearch extends Component {
  // setting initial state - state object has :keywords key set = to empty string since form field <input> is initially blank
  state = {
    keywords: ''
  }
  // event object below comes from onSubmit event handler in opening <form> tag
  handleFormSubmission = event => {
    event.preventDefault() // prevent the default form submit action
    this.props.fetchGifs(this.state.keywords)
  }
  // event object below comes from onChange event handler in <input> text field. event.target = <input> text field which triggered the event (it changes as the user types into it)
  handleChange = event => {
    this.setState({
      keywords: event.target.value // event.target.value = the value of the <input>'s value property = string search terms entered
    })
  }
  // updating state - the :keywords key in state object points to whatever the user enters in the <input> text field
  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <label>Enter a Search Term</label>:
        <br />
        <input type="text" name="keywords" value={this.state.keywords} onChange={this.handleChange} />
        <br />
        <input type="submit" value="Find Gifs" />
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
  