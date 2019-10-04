import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    constructor(){
        super();
        this.state = {gifs: []}
    }

    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(res => res.json())
            .then(({data}) => {
                    this.setState({ gifs: data.slice(0,3).map( gif => ({ url: gif.images.original.url }) ) })
            })
    }

    search = term => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=` + term + `&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(({data}) => {
                this.setState({ gifs: data.slice(0,3).map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch search={this.search} />
            </div>
        )
    }
}

export default GifListContainer