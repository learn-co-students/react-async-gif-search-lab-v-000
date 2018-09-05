import React, {Component} from 'react'
import GifList from './GifList.js'
import GifSearch from './GifSearch.js'


export default class GifListContainer extends Component {

    state = {
        gifs: []
    }


    fetchGIFs = (query) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
        .then(response => response.json())
        .then(data => {this.setState({ gifs: data.data.slice(0, 3) })})
    }

    componentDidMount() {
        this.fetchGIFs()
    }

    render() {
        return (
            <div>
                < GifSearch fetchGIFs={this.fetchGIFs} />
                < GifList gifs={this.state.gifs} /> 
            </div>          
        )
    }

}