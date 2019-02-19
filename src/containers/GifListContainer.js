import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state={
        response: null,
        query: '',
    }

    nowFetch = () => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`
        console.log("The url is: ", url)
        fetch(url)
            .then(res=>res.json())
            .then(json=>this.setState({response:json.data}))
    }

    submitHandler= (query,event) => {
        console.log("Inside submitHandler the query and event are: ", query, event)
        event.preventDefault()
        // Set the query state, and only once that is done, call nowFetch
        this.setState({query: query}, this.nowFetch)   
    }

    render() {
        console.log("When render is called, response is: ", this.state.response)
        return (
            <div>
                <GifSearch changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
                <GifList data={this.state.response} />
            </div>
        )
    }
}
