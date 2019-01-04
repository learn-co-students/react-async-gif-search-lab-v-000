import React, {Component} from 'react';





class GifSearch extends React.Component {

  constructor(){
    super()
    this.state = {
      textInput: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.textInput)
  }

  handleInput = (event) => {
    this.setState({
      textInput: event.target.value
    })
  }

  render(){
    return(
      <div>
        <form>
          <input type="text" onChange={event=>this.handleInput(event)} value={this.state.textInput}></input>
        </form>
      </div>
    )
  }
}


export default GifSearch;
