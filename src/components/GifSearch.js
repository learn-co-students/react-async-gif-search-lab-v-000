import React, { Component } from 'react';
import './GifSearch.css';
// import  from './'

export default class GifSearch extends Component {

  state = {
    query: ""
  }

  handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = event => {
      event.preventDefault()
      this.props.retrieveGifs(this.state.query)
    }

  render() {
    return (
      <div className="" id="right" >
          <form onSubmit={this.handleSubmit} >
          <p>Enter a Search Term:</p>
          <div>
            <label>
              <input id="query" name="query" type="text" onChange={event => this.handleChange(event)} value={this.state.query} />
            </label>
          </div>
          <div>
            <button type="submit">Find Gifs</button>
          </div>
        </form>
      </div>
    );
  }
}
