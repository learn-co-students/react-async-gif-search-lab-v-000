import React, { Component } from 'react';


class GifSearch extends Component {
constructor(props) {
    super(props);
    this.state = {input: ''};
  }

handleInputChange = event => {
    this.setState({
    	input: event.target.value
    })
  }

eventHandler = event => {
	event.preventDefault();
	console.log(this)
	this.props.submitHandler(this.state.input);
}


render() {
  return (
    <div>
       <form onSubmit={this.eventHandler}>
       <label>
        <input type="text" name="input" value={this.state.input} onChange={this.handleInputChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
 }
}
export default GifSearch;