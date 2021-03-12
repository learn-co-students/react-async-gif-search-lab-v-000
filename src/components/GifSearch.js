import React from 'react';

class GifSearch extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      input: ""
    };
  }
  
  handleChange = (event) => {
    this.setState ({
      input: event.target.value
    });
  }
   
  render() {
    return(
      <form onSubmit={event => this.props.handleSubmit(event)}>
        <p>Enter a Search Term</p>
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