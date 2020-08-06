import React, { Component } from "react";

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends Component {
    constructor () {
        super ()
    this.state = {
        topResults: []
    }
}


    handleSubmit(event) {
        console.log(event)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target.value}&api_key=K82mHF1IgNkjrTPXkJy4PDFI0n0xgsjL&rating=g`)
        .then(response => response.json())
        .then(data => {
            // this.setState({ topResults: data.slice(0, 3) })
            console.log(data)
        });
    }

    render () {
        return (
      <div>
            <GifList results={this.state.topResults}/>
            <GifSearch onSubmit={this.handleSubmit}/>
        </div>
        );
        
    

}
}

export default GifListContainer
