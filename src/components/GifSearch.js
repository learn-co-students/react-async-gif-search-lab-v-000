import React, { Component } from 'react';

export default class GifSearch extends Component {
    constructor(){
        super();
        this.state = { searchQuery: '' }
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.getSearchQuery(event.target[0].value);
    }

    handleOnChange = (event) => {
        this.setState({ searchQuery: event.target.value })
    }


    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input name='searchtTerm' type='text' value={this.state.searchQuery} onChange={event => this.handleOnChange(event)} />
                <button class='btn-primary' type='submit'>Find Gifs</button>
            </form>
        )
    }
}
