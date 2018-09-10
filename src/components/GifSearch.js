import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        query: ""
    }

    handleChange = ({target: {value}}) => {
        this.setState({
            query: value
        })
    }


    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    render() {
        return (
            <div className="col-sm-6">
            <label htmlFor="form">Search Gifs:</label>
            <form onSubmit={this.handleSubmit} id="form">
                <input type="text" value={this.state.query} onChange={this.handleChange}/>
                <input type="submit" className="btn btn-success" value="Go"/>
            </form>

            </div>
        )
    }
}