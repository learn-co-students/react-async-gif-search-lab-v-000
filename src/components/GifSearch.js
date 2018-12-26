import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor(){
        super()
        this.state = {
            query: ''
        }
    }

    handleChange = (e) =>{
        e.preventDefault()
        this.setState({
            query: e.target.value
        })
    }
    render (){
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                debugger
                this.props.submitFn(this.state.value)}}>

                Search for Gif's here<input type="text" onChange={this.handleChange} value={this.state.query} />
                <button> Submit </button>
            </form>
        )
    }
}