import React, { Component } from 'react'

export default class GifSearch extends Component {

    state={
        localQuery: '',
    }

    handleChange = (e) => {
        //e.persist()
        this.setState({localQuery:e.target.value})
    }

    render() {
        const theQuery = this.state.localQuery
        console.log("Inside GifSearch the query is: ", theQuery)
        return (
            <form onSubmit={(e)=>this.props.submitHandler(theQuery,e)}>
                <input id='queryInput' onChange={this.handleChange} type='text' value={this.state.localQuery} />
                <button id='querySubmit'  type='submit'>Submit</button>
            </form>
        )
    }
}
