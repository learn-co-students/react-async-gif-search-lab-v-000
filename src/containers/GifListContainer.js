import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {

    state = {
        topThree = []
    }

    getGifs() {
        fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(json => {
            const array = json.data.slice(0, 3)
            this.setState({topThree: array})
        })
    }

    render() {
        return (
        <div>
        <GifSearch submit={this.getGifs}/>
        <GifList gifs={this.state.topThree}/>
        </div>
        )
    }
}

export default GifListContainer;