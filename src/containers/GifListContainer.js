import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component{
   
    state = {
        gifs: []
      }

    
    fetchGifs = (search = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }
    
   
    render(){
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs} />
            </div>

        )
    }
    componentDidMount(){
        this.fetchGifs()
    }
}