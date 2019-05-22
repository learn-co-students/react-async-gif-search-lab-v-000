import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
    
    state = {
      gifs: []
    }
  

  render() {
    return(
      <div>
      <GifSearch fetchGIFs={this.fetchGIFs}/>
      <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  


    fetchGIFs = (query = 'dophins') => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=E5JcuxCpMRTcXlTUt6Xf7CePcc04j97x&rating=g&limit=3`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({ gifs: data.map(gif => ({url: gif.images.original.url})) })

       })
    }

  componentDidMount() {
   this.fetchGIFs()
  }
  
}

export default GifListContainer