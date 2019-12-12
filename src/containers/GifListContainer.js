import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
     this.fetchGifs("")
    }

    fetchGifs = (search) => {
        let url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=c7mRAXSHy6RYeFRQecX1iHz7kwyMPd72&rating=g`
        fetch(url)
            .then(resp => resp.json())
            .then(json => {
                let firstThree = json.data.slice(0, 3)
                this.setState({
                    gifs: firstThree
                })
            })
    }

    handleSearchSubmit = (search) => {
        this.fetchGifs(search)
    }

    render() {

        return (
            <div>
                <GifSearch handleSearchSubmit={this.handleSearchSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;