import React, { Component } from 'react';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
            gifs: []
        }
    }

    render() {
        return(
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch fetchGifs={this.fetchGifs}/>
            </div>
        )
    }

    fetchGifs = (input) => {
        const searchURL = (`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=Omydimbwi6eOGU9V0AEXMup7dftdBrqS&rating=g&limit=3`);
        fetch(searchURL)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ 
                gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
    }

}


export default GifListContainer