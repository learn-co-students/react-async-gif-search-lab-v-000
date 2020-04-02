import React, { Component } from 'react'

class GifSearch extends Component {
    state = {
        query: ''
    }

    
    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.search(this.state.query)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" value={this.state.query} onChange={this.handleChange} required/>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }

}

export default GifSearch