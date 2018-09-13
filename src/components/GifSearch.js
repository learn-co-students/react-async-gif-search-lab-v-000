import React, {Component} from 'react'

export default class GifSearch extends Component{
  constructor(){
    super()
    this.state = {
      value: ''
    }
  }

  eventHandleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleQuerySubmit = (event) => {
    this.props.searchQuery(this.state.value)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleQuerySubmit}>
          <input type="text" value={this.state.value} onChange={this.eventHandleChange}/>
          <input type="submit" value="Search Gif"/>
        </form>
      </div>
    )
  }


}
