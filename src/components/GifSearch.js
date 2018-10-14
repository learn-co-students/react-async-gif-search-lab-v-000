import React, {Component} from 'react'

export default class GifSearch extends Component{
    constructor(){
        super()
        this.state ={
            search: ''
        }
    }
    handleChange = event =>{
        this.setState({
            search: event.target.value
        })
    }
    handleSubmit = event =>{
        event.preventDefault()
        this.state;
    }
    render(){
        return(
            <form onSubmit={event => this.handleSubmit(event)} >
            <input type="text" id="search" onChange = {event =>this.handleChange(event)} value={this.state.search} />
            </form>
        )
    }
}