import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        this.fetchGifs();
    }

    fetchGifs = (query = 'dogs') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=owGfc2F28YBEwY7KVJmWJM1afVxNIvle&rating=g&limit=3`)
        .then(response => response.json())
        .then(({data}) => {this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })})
    }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;