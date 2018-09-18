import React, { Component } from 'react'

class GifSearch extends Component {
    
    render() {
        return (
                <form onSubmit={event => this.props.handleSub(event)}>
                    <input value={this.props.searchTerms} onChange={event => this.props.handleText(event)} name="searchTerm" type="text"/><br></br>
                    <button>Search</button>
                </form>
            )
    }
    
}

export default GifSearch