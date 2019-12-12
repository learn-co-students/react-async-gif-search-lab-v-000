import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const API_KEY = 'CXpCRI50JLhZ7BK0KQ9eAua2fmjil4uV'
export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    handleSearch = (event, query) => {
        event.preventDefault()

        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    gifs: data.data.slice(0, 3)
                })
            })
            .then(data => {
                console.log(this.state)
            })
    }
    
    render() {
        return (
            <div class="container">
                <GifSearch search={this.handleSearch} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}