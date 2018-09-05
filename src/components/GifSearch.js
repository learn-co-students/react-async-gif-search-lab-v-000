import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        query: ""
    }

    handleChange = event => {
        event.persist()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="query" value={this.state.query} onChange={event => this.handleChange(event)} />
                <input type="submit" />
            </form>
        )
    }
}