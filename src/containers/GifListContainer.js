import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends Component {
    state = {
        gifs: []
    }

    fetchGIFs = (query = "golden retriever") => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=KmyXLALQVWwMejWxDSgPNTiNRRVMqr6j&rating=g&limit=3`
        fetch(url)
        .then(resp => resp.json())
        .then(gifs => {
            this.setState({
                gifs: gifs.data.map(gif => ({ url: gif.images.original.url }))
            })
        })
    }

    componentDidMount() {
        this.fetchGIFs()
    }

    render(){
        return(
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

}

export default GifListContainer

//this is the container that does the fetching and then renders subcomponent
//container components contain other components
//they themselves aren't visible on page