import React, { Component } from 'react';

export default class GifSearch extends Component {

    // Constructor for using/initializing state
    constructor(props) {
        super(props);
        
        // Define the initial state:
        this.state = {
          query: ''
        };
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.getGifs(this.state.query)
    }

 	handleChange = event => {
		this.setState({
			query: event.target.value
		}, () => {console.log('input : ', this.state.query)})
	}
   

    render() {
        return (
          <div className="gifsearch">
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.query} onChange={this.handleChange} />
            </form>
          </div>
        );
    }
}
