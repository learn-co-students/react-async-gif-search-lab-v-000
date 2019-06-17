import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: [],
    }
  }

  fetchGifs = (value) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=NMxLqBjvQ8o1mnepKTqX2tmZLScUg3Yv&limit=3`)
    .then(data => { data.json() })
    .then(response => this.setState({
      response: response.data
    }))

  }


    // fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=NMxLqBjvQ8o1mnepKTqX2tmZLScUg3Yv&limit=3`)
    // .then(data => data.json())
    // .then(response => {
    //     this.setState({
    //       response: response.data
    //     })
    //   }
    // )
  

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList items={this.state.response} />
      </div>
    )
  }

}

export default GifListContainer
