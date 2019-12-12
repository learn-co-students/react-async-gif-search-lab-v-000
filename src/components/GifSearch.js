import React, { Component } from 'react'

import GifListContainer from '../containers/GifListContainer'

export default class GifSearch extends Component {

    state = {
        searchValue: ""
    }

    handleSearchValueChange = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.search(event, this.state.searchValue)
    }


    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text" name="searchValue" onChange={event => this.handleSearchValueChange(event)} value={this.state.searchValue} />
                <input type="submit" />
            </form>
        )
    }
}