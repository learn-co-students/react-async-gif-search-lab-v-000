import React from 'react'

import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

export default class GifListContainer extends React.Component {

    constructor() {
        super();
        this.state = {
          gifs: [],
        };
    }

    componentDidMount() {
        this.doSearch('trending');
    }

    doSearch = (searchField) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchField}&limit=3&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(response => response.json())
            .then(({data}) => {
                this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
            })
            .catch((error) => console.error("Fetch Failed",error));

    }

    render() {
        return (
            <div>
                <GifSearch onSubmit={this.doSearch} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
  }