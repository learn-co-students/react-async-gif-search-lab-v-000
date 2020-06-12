import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListConatiner extends Component {

    constructor() {
        super();
        state = {
        	gifList: []
        }
    }

    fetchGifs = (query) => {
    	fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    	.then(resp => resp.json())
    	.then(({data}) => {
    		this.setState({
          gifList: data.map(gif=>({url: gif.images.original.url}))
    	})
    }

    gifListGenerator = () => {
        return(
            this.state.gifList.map(gif => {
            return <GifList key={gif.id} gifItem={gif} /> 
          })
        )
    }

    render() {
        return (
        	<div>
            <GifSearch searchGifs={this.fetchGifs} />
            {this.gifListGenerator()}
          </div>
        );
    }
}

export default GifListConatiner;
