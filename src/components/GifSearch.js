import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        search: ""
    }

    handleSearchChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSearchSubmit(this.state.search)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleSearchChange} value={this.state.search} type="text" name="search"></input>
                <input type="submit" value="Find Gifs"></input>
            </form>
        )
    }
}

export default GifSearch;