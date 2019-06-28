import React, { Component } from 'react';

class GifSearch extends Component  {
    state = {
        searchWord: ''
      }
    
    handleChange = event => {
    this.setState({
        searchWord: event.target.value,
    });
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state.searchWord)
      }

    render(){
        return(
          <form onSubmit={event => this.handleSubmit(event)}>
          Enter a search term:
              <input type="text" name="searchWord" value={this.state.searchWord} onChange={this.handleChange}/>
              <input type="submit" value="Find Gifs"/>
          </form>
        )
    }
}
export default GifSearch