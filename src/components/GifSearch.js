import React, { Component } from 'react'


class GifSearch extends Component{

  state={
    gifname: ""
  }

  handleChange = event => {
    event.persist()
    this.setState({
      gifname: event.target.value
  })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.gifname)//callback prop
  }

render(){
  return(
  <form onSubmit={this.handleSubmit}>//callbackfunction
  <label>
  Gif Search
  <input type="text" id="gifname" value={this.state.gifname} onChange={this.handleChange} ></input>
</label>
<input type="submit" value="Submit" />
  </form>
)
}
}


export default GifSearch
