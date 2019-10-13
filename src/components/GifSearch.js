import React, { Component } from 'react';


class GifSearch extends Component {
constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange;
    this.handleSubmit = this.handleSubmit;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

render() {
  return (
    <div>
       <form onSubmit={this.handleSubmit}>
       <label>
        <input type="text" id="userinput" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
 }
}
export default GifSearch;