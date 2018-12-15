import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        this.getGifs()
    }

    getGifs = (query = `dogs`) => {
        let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
            .then(response => response.json())
            .then(({data}) => {
                this.setState({
                    gifs: data.map(image => ({url: image.images.original.url}))}, () => {console.log('state is:', this.state.gifs)})
                })
    }

    render() {
        return (
            <div>
                < GifSearch getGifs={this.getGifs} />
                <GifList myGifs={this.state.gifs} />
            </div>
        )}
}

export default GifListContainer;