import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{
   constructor() {
       super()
       this.state = {
        gifsList: []
       }
   }
   
    render(){
        return(
            <div>
                < GifSearch fetchGifs={this.fetchGifs} />
                < GifList gifsList={this.state.gifsList} />
            </div>
        )
    }

    fetchGifs = (query) => {
        let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`

        fetch(url)
            .then(res => res.json())
            .then(gifs => {
                this.setState({
                    gifsList: gifs.data
                })
            })
    }

    componentDidMount() {
        this.fetchGifs();
    }

}