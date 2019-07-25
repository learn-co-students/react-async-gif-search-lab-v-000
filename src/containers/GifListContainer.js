import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GiftListContainer extends React.Component {
    state = { gifs: [] }

    fetchGIFs = (query = "cats") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
          .then(res => res.json())
          .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
      }
    
      componentDidMount() {
        this.fetchGIFs()
      }

      render() {
        return (
            <div>
            <GifSearch handleSubmit={this.handleSubmit} />
            <GifList gifs={this.state.gifs} />  
            </div>
        )

      }
    }
