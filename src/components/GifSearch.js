import React, {Component} from 'react'

export default class GifSearch extends Component {

  constructor () {
    super ();
    this.state = {
      query: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

  render () {

    return (

      <form onSubmit={this.handleSubmit}>
        <label> Search for a Gif</label>
        <input name="text" value={this.state.query} onChange={event=>this.setState({query: event.target.value})}/>
      </form>

    );

  }
}
