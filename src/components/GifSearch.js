import React, { Component } from 'react';

class GifSearch extends Component {

  constructor(props) {
    super(props)
    this.state ={
      search: ""
    }
  }

  	handleChange = event => {
	    event.persist()
	    this.setState({
	        [event.target.id]: event.target.value
	    })
	}

    handlingSubmit = (event) => {
       event.preventDefault()
      this.props.handleSubmit(this.state)
    }


  render() {
    return (
      <form onSubmit={this.handlingSubmit}>
          <input type="text" id="search" value={this.state.search}
          onChange={this.handleChange}/>
      </form>

    )
  }



}

export default GifSearch
