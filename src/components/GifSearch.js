import React, { Component } from 'react'


class GifSearch extends Component{

  state={
    gifname: ""
  }

  handleChange = event => {
    event.persist()
    this.setState({
  [event.target.id]: event.target.value
  })
  }

render(){
  return(
  <form>
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
