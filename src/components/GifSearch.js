import React, {Component} from 'react'

export default class GifSearch extends Component {
  constructor(){
    super()
    this.state = {value: ''}
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit =(event) => {
    event.preventDefault();
    this.props.fetchGifs(this.state.value)
  }

  render(){
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type='text' value={this.state.value} onChange={event => this.handleChange(event)}></input>
          <button type="submit">Find Gifs</button>
        </form>
      </div>
    )
  }
}