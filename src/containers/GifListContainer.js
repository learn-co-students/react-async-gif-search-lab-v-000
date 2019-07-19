import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends React.Component {
    state = { gifs: [] };
    fetchGIFs( query = 'dogs') {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=HgzoamsAA3iQ4thSSVcx502oVQamRFwt&rating=g`)
          .then(response => response.json())
          .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
          
      }

      componentDidMount() {
        this.fetchGIFs()
      }
    render() {
      return (      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs} />
      </div>)
    }
  }