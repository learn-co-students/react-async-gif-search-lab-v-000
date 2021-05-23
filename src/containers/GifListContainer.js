import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{ 

    state = {
        gifs: []
    }

    componentDidMount() {
        this.fetchGIFs();
    }

    fetchGIFs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=ke7MB36QYofkb7FOjy70lbtqROTuorRj&rating=g&limit=3`)
        .then(response => response.json())
        .then(({data}) => {
            this.setState({ gifs: data.map(gif => ({url: gif.images.original.url}) ) })
        })
    }

    render() {
        return (
            <div>
                <GifSearch fetchGIFs = {this.fetchGIFs}/>
                <GifList gifs = {this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer;