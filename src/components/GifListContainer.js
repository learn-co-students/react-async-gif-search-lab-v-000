import React, { Component } from 'react';

import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends Component {
    state = { 
        gifs: []
    }

    componentDidMount() {
        this.fetchGifs() 
    }

    fetchGifs = (query) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
            .then(response => response.json())
            .then( ({data}) => {
                this.setState({
                    gifs: data.map( gif => ({ url: gif.images.original.url }) )
                })
            })
    }

    render() {
        return ( 
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch fetchGifs={this.fetchGifs}/>
            </div>
        )
    }
}

export default GifListContainer