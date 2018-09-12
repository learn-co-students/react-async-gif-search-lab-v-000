import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    topGifs: []
  }

  // TODO: pass down submit handler to gifsearch form
  componentDidMount(){
    this.fetchGifs()
  }

  fetchGifs = (searchTerm = "cats") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(resp => resp.json())
    .then(({data}) => this.setState({topGifs: data}))
  }


  render(){
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.topGifs}/>
      </div>

    )
  }
}

export default GifListContainer
