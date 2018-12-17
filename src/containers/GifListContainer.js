import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        gifs: []
    }
    render() {
        return(
          <div>
            <GifSearch fetchGifs={this.fetchGifs} />
            <GifList gifs={this.state.gifs} />
          </div>
        )
      }
    fetchGifs = (query) =>{
       let url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
        fetch(url)
        .then(response => response.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
          })    
        }
        componentDidMount() {
            this.fetchGifs()
          }
 
}