import React, { Component } from 'react';

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            query: ''
        }
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.setQuery(this.state.query)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="searchQuery" onChange={this.handleChange} />
                <input type="submit" />
            </form>
        )
    }
}