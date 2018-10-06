import React, { Component } from 'react';

class GifSearch extends Component {

  constructor() {
    super();

    this.state = {
      term: ''
    };
  }

  render(){
    return (
           <form onSubmit={ (event) => { event.preventDefault()
               this.props.searchMethod(event.target.elements[0].value)} }>
            <input type="text" onChange={ (event) => this.updateState(event) } value={ this.state.term } />
            <button type="submit">Search</button>
          </form>
    )
  }

  updateState = (event) => {
    this.setState({
      term: event.target.value
    })
  }

}

export default GifSearch
