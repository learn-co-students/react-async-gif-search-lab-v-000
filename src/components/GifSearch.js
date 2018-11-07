import React, {component} from 'react'

class GifSearch extends React.Component{
    state ={
      find: ""
  }


  handleSearch=(event)=>{
    console.log(this)
    event.preventDefault()
    this.props.fetchGIFs(this.state.find)
  }
  render(){
    return(
      <form onSubmit={this.handleSearch}>
        <input type="text" value={this.state.query} onChange={event => this.setState({find: event.target.value})}/>
      </form>
    )
  }

}
export default GifSearch
