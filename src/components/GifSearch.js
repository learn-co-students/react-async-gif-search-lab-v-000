import React, {Component} from 'react'

export default class GifSearch extends Component {
  constructor(){
    super()
    this.state = {value: ''}
  }

  render(){
    return(
      <div>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <input type='text' value={this.props.type} onChange={event => this.props.handleChange(event)}></input>
          <button type="submit">Find Gifs</button>
        </form>
      </div>
    )
  }
}