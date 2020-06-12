import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends Component {
    state = {
        topThreeGifs: []
    }

    fetchGifs = (query) =>{
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response=> response.json())
        .then(({data}) => {
            this.setState({
                topThreeGifs: data.map(gif=>({url: gif.images.original.url}))
            })
        })
    }

    render(){
        return(
            <div>
                <div>
                    <GifSearch searchGifs={this.fetchGifs}/>
                </div>
                <div>
                    <GifList gifs={this.state.topThreeGifs} />
                </div>
            </div>
        )
    }
}

export default GifListContainer;