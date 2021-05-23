import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    fetchGifs = (searchTerm = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=vef5R5vbkotuakiqEutwUXw213VDfsR1&q=${searchTerm}&limit=3&offset=0&rating=g&lang=en`)
            .then(response => response.json())
            .then(result => this.setState({ gifs: result.data.map(gif => ({url: gif.images.original.url})) }))
    }

    componentDidMount(){
        this.fetchGifs()
    }


    render(){
        return(
            <div>
                < GifSearch fetchGifs={this.fetchGifs} />
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer
