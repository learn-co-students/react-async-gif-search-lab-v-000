import React from 'react';

export default class GifSearch extends React.Component {

    state = {
        query: ""
    }

    handleQueryChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.querySearch(this.state.query)
    }

    render() {
        return (
            <div className="searchBar">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type='text' placeholder="Enter Keywords Here" onChange={event => this.handleQueryChange(event)} value={this.state.query} />
                </form>
            </div>
        )
    }
}