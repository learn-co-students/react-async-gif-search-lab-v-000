import React, { Component } from 'react'


export default class GifSearch extends Component{
  constructor(){
    super()
    this.state = {
      value: ""
    }
  }

handleChange = (e)=>{
  this.setState({
    value: e.target.value
  })
}

findGif=(e)=>{
  e.preventDefault()
  this.props.searchGif(this.state.value)
}


  render(){
    return(
      <form onSubmit={this.findGif}>
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
      <input type='submit'/>
      </form>

    )
  }
}
