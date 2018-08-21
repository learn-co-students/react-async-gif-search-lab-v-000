import React, { Component } from 'react';

// Note : For some reason, required calling import this way instead of the usual "./NAME"
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    // Constructor for using/initializing state
    constructor() {
        super();
        
        // Define the initial state:
        this.state = {
          gifs: []
        };
    }
    
    // Function to get the first 3 gifs
    getGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then((data) => { 
            const firstThree = data.data.slice(0, 3)
            console.log(firstThree)
            this.setState({
                gifs: firstThree
            })         
        })
    }
    
    // Get the gifs on mount
    componentDidMount() {
        this.getGifs("dolphin")
    }
    

    render() {
        return (
          <div className="giflistcontainer">
            <GifList gifs={this.state.gifs} />
            <GifSearch getGifs={this.getGifs} />
          </div>
        );
    }
}
