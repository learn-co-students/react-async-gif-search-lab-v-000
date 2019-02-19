import React from 'react'

export default class GifSearch extends React.Component{

  state = {
    search: ''
  }

  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.props.handleFetch(this.state.search)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='search' onChange={this.handleChange}/>
        <input type='submit'/>
      </form>
    )
  }
}
