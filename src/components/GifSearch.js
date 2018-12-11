import React, {Component} from 'react'

class GifSearch extends Component {
state = { keyword: ""};

handleSubmit = event => {
    event.preventDefault()
    this.props.fetchImages(this.state.keyword)
  }

render(){
  return(
    <div>
    <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.keyword} onChange={event => this.setState({
        keyword: event.target.value
      })}/>
this is my form
    </form>
    </div>
  )
}
}
export default GifSearch
