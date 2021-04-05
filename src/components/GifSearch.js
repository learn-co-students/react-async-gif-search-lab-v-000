import React from 'react'

export default class GifSearch extends React.Component {
    
    state = {
        searchTerm: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <button type="submit">Search</button>
                </div>
            </form>
        )
    }
}