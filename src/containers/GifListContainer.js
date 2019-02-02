import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            query: '',
            gifs: []
        }
    }

    setQuery = result => {
        this.setState({
            query: result
        }, () => this.fetchData())
    }

    fetchData = () => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(response => response.json())
                .then(gifList => {
                    const curatedList = gifList.data.slice(0, 3).map(gif => {return gif.images.original.url})
                    this.setState({
                        gifs: [...curatedList]
                    })
                })
    }

    render() {
        return (
            <div className="r-Results">
                < GifSearch setQuery={this.setQuery} />
                < GifList gifList={this.state.gifs} />
            </div>
        )
    }
}