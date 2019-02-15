// responsible for fetching the data from the giphy api, storing the first
// 3 gifs from the response in it's component *state*
// render a <GifSearch /> component
// pass down a submit handler function to <GifSearch /> as a prop.

import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    searchTerm: '',
  }

  // gif search get a callback prop from GifListContainer?
  render() {
    return (
      <div>
        <GifSearch updateSearchWord={word => this.setState({ searchTerm: word })} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  componentDidUpdate() {
    const { gifs } = this.state
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${
        this.state.searchTerm
      }&api_key=dc6zaTOxFJmzC&rating=g`,
    )
      .then(response => response.json())
      .then(stuff => {
        gifs.push(stuff.data[0].images.original.url)
        gifs.push(stuff.data[1].images.original.url)
        gifs.push(stuff.data[2].images.original.url)
      })
  }
}

export default GifListContainer
