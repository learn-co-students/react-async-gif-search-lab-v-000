import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
   
       state = {
            gifs: [ ]
        };
    

    fetchGIFs = (query = "anime") => {
        let url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
        fetch(url)
          .then(res => res.json())
          .then(g => {
            this.setState({ gifs: g.data.map( gif => ({ url: gif.images.original.url }) ) })
          })
      }

    componentDidMount() {
       this.fetchGIFs()
    }


    render() {
        return (
            <div>
                <GifSearch fetchGIFs = {this.fetchGIFs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}
export default GifListContainer