import React, { Component } from "react";

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor(){
        super();

        this.state = {
            gifs: [
            ]
        }
    }

    handleSubmit = (textInput) => {
        let queryString = textInput
        fetch(`http://api.giphy.com/v1/gifs/search?q=${queryString}&api_key=4zkACueo6NZiaym4FpEOirOjZe5LfbUC&rating=g`)
        .then(response => response.json())
        .then(data => {
            this.setState({
            gifs: [
                data.data[0].images.original.url, data.data[1].images.original.url, data.data[2].images.original.url
            ]
            })
        })
    }


    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default GifListContainer