import React, { Component } from "react";

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends Component {
    constructor () {
        super ()
    this.state = {
        topResults: [],
        query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}


    handleSubmit(query) {
        let topThree = [];
 
        return fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=K82mHF1IgNkjrTPXkJy4PDFI0n0xgsjL&rating=g`)
        .then(response => response.json())
        .then(response => {
            topThree = response.data.slice(0, 3)
            this.setState({topResults: topThree})
            // console.log(response.data[0].images.original.url)
        });

    }

    render () {
        return (
      <div>
          <div>
            <GifList results={this.state.topResults}/>
            </div>
            <div>
            <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        </div>
        );
        
    

}
}

export default GifListContainer
