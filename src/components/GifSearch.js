import React, {Component} from 'react'
 export default class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    }
  }
   handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }
   handleSearch = (event) => {
    event.preventDefault();
    this.props.submitHandler(this.state.userInput)
  }
   render() {
    return(
      <form onSubmit={this.handleSearch}>
        <input type="text" value={this.state.userInput}
        onChange={this.handleChange} />
        <input type="submit" value="Search GIF"/>
      </form>
    )
  }
}
