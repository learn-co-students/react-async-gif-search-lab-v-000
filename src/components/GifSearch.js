import React, { Component } from 'react'

class GifSearch extends Component {
  constructor(props) {
    super(props);

    this.inputHandler = this.inputHandler.bind(this);
    this.gifSearchHandler = this.gifSearchHandler.bind(this)
   
  }
  
  

  state = {
    query: ''
  }

  inputHandler = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  gifSearchHandler = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.gifSearchHandler}>
        <label>
          Input:
          <input 
            type="text" 
            value={this.state.query} 
            onChange={this.inputHandler} />
        </label>
        <input 
          type="submit" 
          value="Submit" />
      </form>
      </div>
    )
  }
}

export default GifSearch
