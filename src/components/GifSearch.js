import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        searchterm: ''
    }

    inputChange = event => {
        this.setState({
            searchterm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const searchterm = this.state.searchterm
        this.setState({
            searchterm: ''
        })
        this.props.getFetchData(searchterm)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search for Giphys</label>
                    <input type="text" id="searchterm" name="searchterm" onChange={this.inputChange} value={this.state.searchterm} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default GifSearch;