import React, {Component} from 'react'
 export default class GifSearch extends Component {
   constructor(props){
    super(props)
    this.state = {
      query: ""
    }
  }
   handleChange= event => {
    event.persist()
    this.setState({
      query: event.target.value
    })
  }
   handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }
   render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <input type="text" id="query" value={this.state.query} onChange={this.handleChange}/>
    </form>
  )
}
 }