import React, { Component } from 'react';

// import  from './'

export default class GifSearch extends Component {

  state = {
    gifs: [],
    query: ""
  }

  handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

  render() {
    return (
      <div className="" onSubmit={() => {this.props.retrieveGifs(this.state.query)}}>
          <form >
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
