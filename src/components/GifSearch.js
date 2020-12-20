import React, { Component } from 'react';

class GifSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }
  
  handleChange = event => {    
    this.setState({
      input: event.target.value
    })

    // console.log('event:', event);
    
    // console.log('this.state.input:', this.state.input);
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   // debugger
  // }

  render() {
    return (
      // <form onSubmit={this.props.handleSubmit}>
      <form onSubmit={event => this.props.handleSubmit(event)}>
        <p><strong>Enter a Search Term</strong></p>
        <input 
          type="text" 
          id="gif_search_input" 
          onChange={this.handleChange} 
          value={this.state.input}
        />
        <input
          type="submit" 
          value="Find Gifs"
        />
      </form>
    )
  }
}

export default GifSearch