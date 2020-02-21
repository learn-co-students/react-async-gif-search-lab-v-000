import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            gifs: []
        }
    }

    querySearch = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(results => {
            this.setState({gifs: results.data.slice(0,3)})
        })
    }

    render() {
        return (
            <div>
            < GifSearch querySearch={this.querySearch} />
            < GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}