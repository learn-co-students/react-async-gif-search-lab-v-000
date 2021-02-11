import React, { Component } from 'react' 
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    fetchGifs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=3kcyerTWrbsMER6ksuS64Ul05Q0RuHBQ&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() {
        this.fetchGifs()
    }



    render () {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch fetchGifs={this.fetchGifs} />
            </div>
        )
    }}

export default GifListContainer