import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {
        gifs: []
    };

    render() {
        return (
        <div>
            < GifSearch getGifs={this.fetchGifs} />
            < GifList gifs={this.state.gifs} />
        </div>
        )
    };

    fetchGifs = (searchTerm) => {
        let url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
        
        fetch(url)
        .then( resp => resp.json())
        .then(({data}) => {
            this.setState({
                gifs: data.map( gif=> ({
                    url: gif.images.original.url
                }))
            })
        })
    }

    componentDidMount() {
        this.fetchGifs();
    }
}