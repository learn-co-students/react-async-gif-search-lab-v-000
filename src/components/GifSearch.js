import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        query: ""
      }
    
      handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.query)
      }

    handleChange = (e) =>{
        this.setState({
           query: e.target.value
       })
   }
    render (){
        return (
            <form onSubmit={this.handleSubmit(this.state.value)}>

                Search for Gif's here<input type="text" onChange={this.handleChange} value={this.state.query} />
                <button> Submit </button>
            </form>
        )
    }
}