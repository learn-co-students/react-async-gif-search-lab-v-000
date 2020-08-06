import React, { Component } from "react";

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends Component {

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=K82mHF1IgNkjrTPXkJy4PDFI0n0xgsjL&rating=g')
        .then(response => response.json())
        .then(data => console.log(data));
        // ^ should store the first 3 gifs into component state, and pass data to GifList child as prop
    }

    handleSubmit(event) {

    }

    render () {
        return (
      <div>
            <GifList />
            <GifSearch onSubmit={this.handleSubmit}/>
        </div>
        );
        
    }

}

export default GifListContainer
