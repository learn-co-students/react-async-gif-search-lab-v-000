import React, { Component } from 'react';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GiftListContainer extends Component {
    constructor() {
        super()
        this.state = {
            results: []
        }
    }

    findGIFs = (query) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response => response.json())
        .then(({data}) => this.setState({
            results: data.map(result => ({
                url: result.images.original.url
            }))
        }))
    }

    render() {
        return (
            <div>
                <GifSearch findGIFs={this.findGIFs}/>
                <GifList results={this.state.results}/>
            </div>
        )
    }
}


