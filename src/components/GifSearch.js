import React, {Component} from 'react'

export default class GifSearch extends Component{
    constructor(){
        super()
        this.state = {
            search: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.fetchImages(this.state.search);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <input type="text" id="search" onChange = {event =>this.handleChange(event)} value={this.state.search} />
                <input type="submit"/>
            </form>
        )
    }
}