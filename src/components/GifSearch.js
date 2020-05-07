import React, { Component } from 'react'

class GifSearch extends Component {

    state = {
        searchQuery: ''
    }

    handleUpdate = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.searchQuery)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <button onClick={(event) => this.handleSubmit(event, this.state.searchQuery)} >Click to log the gifs in console</button> */}
                <input name="searchQuery" type='text' onChange={this.handleUpdate}/>
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default GifSearch