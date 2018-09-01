import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            GIFs: []
        }
    }

    fetchGIFs = (query) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response => response.json())
        .then(({data}) => {
            this.setState( {GIFs: data.map(gif => ({ url: gif.images.original.url})) } );
        });
    }
    componentDidMount() {
        this.fetchGIFs()
    }

    render() {
        return (
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />                <GifList gifs={this.state.GIFs} />
            </div>
        )
    }
}

export default GifListContainer;