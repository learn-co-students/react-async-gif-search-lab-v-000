import React, {Component} from 'react'


export default class GifSearch extends Component {

  state = {
    query: ''
  }

  //will call this.props.handleSubmit
  //with argument of current query

  handleChange = (event) => {
    //this is what keeps state updated
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      //should actually be passing in state, not event for it to be true controlled component
      <form onSubmit={(event) => this.props.handleSubmit(event)}>
      <input
        type="text"
        value={this.state.query}
        onChange={this.handleChange}
      />
      </form>
    )
  }
}
