import React, {PureComponent} from 'react'

class GifSearch extends PureComponent{

  state = {
    value: ''
  }

  handleChange = (e) =>{
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state.value)
    this.props.onSubmit(this.state.value)

  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Find Gifs"/>
      </form>
    )
  }
}
export default GifSearch
