import React, { Component } from 'react'

import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    storeGifData = (gifData) => {
        const gifInfos = []

        for (const gifIndex of [0, 1, 2]){
            const gi = {}
            const gif = gifData[gifIndex]

            gi.url = gif.images.original.url
            gi.id = gif.id

            gifInfos.push(gi)
        }

        this.setState({
            gifs: gifInfos
        }, () => console.log(this.state.gifs))
    }

    loadGifs = (query) => {
        fetch("http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g&q=" + query).
        then(response => response.json()).
        then(gifData => this.storeGifData(gifData.data))
    }

    render(){
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch onSubmit={this.loadGifs} />
            </div>
        )
    }
}

export default GifListContainer