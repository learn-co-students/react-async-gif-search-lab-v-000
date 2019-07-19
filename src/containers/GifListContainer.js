import React, {Component} from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends Component {

    state = {
        storedGifs: []
    }
    
    render() {
        return (
            <div>
                <GifSearch getGifs={this.getGifs}/>
                <GifList storedGifs={this.state.storedGifs} />
            </div>
        )
    }

    getGifs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ 
                storedGifs: data.map( gif => 
                ({ url: gif.images.original.url }) ) 
            })
        }) 
    }

    componentDidMount() {
        this.getGifs()
    }

}

export default GifListContainer