import React, { Component } from 'react'

class GifSearch extends Component {
    constructor(){
        super()
        this.state = {
            queryString: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({
            queryString: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.queryString)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label name="searchbox">Enter query term:</label>
                <input type="text" name="searchbox" value={this.state.queryString} onChange={this.handleInputChange} />
                <button type="submit">Search!</button>
            </form>
        )
    }
}

export default GifSearch