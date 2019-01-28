import React, {Component} from 'react';

export default class GifSearch extends Component {

  state = {
    query: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.query)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Enter a Search Term:</label>
        <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
        <input type='submit' value='Find Gifs' />
      </form>
    )
  }
}
