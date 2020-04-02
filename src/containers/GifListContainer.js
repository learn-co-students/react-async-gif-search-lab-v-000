import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        urls: []
    }

    handleSearch = (value) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=8j0k6WCmxoUDyxbCyrZYB77nZWnMVK6n&rating=g`)
        .then(resp => resp.json())
        .then(json => {
            let firstThreeUrls = []
            for (let i = 0; i < 3; i++) {
                firstThreeUrls.push(json.data[i].images.original.url)
            }
            this.setState({
                urls: firstThreeUrls
            })
        })
    }

    render() {
        return (
            <div>
                <GifSearch search={this.handleSearch} />
                <GifList urls={this.state.urls} />
            </div>
        )
    }
}

export default GifListContainer