import React, { Component } from 'react';

class gifSearch extends Component {
  state = {
    query: ''
  }

  submitHandler = (event) => {
      event.preventDefault();
      this.props.submit(this.state.query)
      console.log(this.state.query)
  }

  render() {
    return(
      <div>
        <h3>Enter a search term:</h3>
        <form onSubmit={this.submitHandler}>
          <input type="text" value={this.state.gifs} onChange={event => this.setState({query: event.target.value})}/>
          <button type="submit">Find Gifs</button>
        </form>
      </div>
    )
  }
}


export default gifSearch;
