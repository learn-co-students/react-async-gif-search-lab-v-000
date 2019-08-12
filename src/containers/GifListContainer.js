import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends Component {
    state = {
        topGifs : []
    }

    componentDidMount() {
        this.fetchApi()
    }

    fetchApi = (query) => {
        let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
        fetch(url)
        .then(resp => resp.json())
        .then(({data}) => {
            let gifs = []
            data.map((gif) => (
                gifs.push(gif.images.original.url)
            ))
            this.setState({
                topGifs : gifs
            })
        })
    }

    render() {
        return ( 
            <div>
                <GifSearch fetchApi={this.fetchApi}/>
                <GifList topGifs={this.state.topGifs}/>
            </div>
        )
    }
}

export default GifListContainer;