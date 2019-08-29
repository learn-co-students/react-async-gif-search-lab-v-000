import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        query: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchApi(this.state.query)
    }


    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                        <label htmlFor="query">Enter a Search Term:</label>
                        <br/>
                        <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
                        <br/>
                    <input className="btn btn-primary" type="submit" value="Search"/>
                    <br/>
                    <br/>
                </form>
                
        )
    }
}