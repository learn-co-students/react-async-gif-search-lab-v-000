import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {
  state = { gifs: [] };



  fetchGifs = (query="dog") => {
   // event.preventDefault()
    let api = 'http://api.giphy.com/v1/gifs/search?q='
   let url = api + query + '&api_key=dc6zaTOxFJmzC&rating=g'
    fetch(url)
      .then(response => response.json())
      .then(({data}) => {

        this.setState({
          gifs: data.map(gif => ({url: gif.images.original.url }))
        })
      })

  }

  componentDidMount() {
    this.fetchGifs()
  }

  render() {

    return (
      <div>
      <GifSearch fetchGifs={this.fetchGifs} />
      <GifList images={this.state.gifs} />;

    </div>)
  }
}

export default GifListContainer
