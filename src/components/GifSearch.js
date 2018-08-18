import React from 'react';

class GifSearch extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      query: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  submitData = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.query);
  }
  
  render() {
    return (
      <form onSubmit={this.submitData} >
        <label>Enter a Search Term:</label><br/>
        <input type='text' id='query' onChange={this.handleChange} /><br/>
        <input type='submit' value='Find Gifs' />
      </form>
    );
  }
}

export default GifSearch;