import React, { Component } from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  handleSubmit = (event, searchTerm) => {
    event.preventDefault()

    fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=gksyUc0jKRkRlKWZuMyGLWD1Q6370oMF&rating=g")
      .then(response => response.json())
      .then(json => {

        // finds gifs where the title or slug includes the search term
        let gifs = json.data.filter(gif => gif.title.includes(searchTerm) || gif.slug.includes(searchTerm))

        this.setState({
          gifs: gifs.slice(0, 3)
        }, () => console.log(this.state.gifs))
      })
  }

  // Should class information go here even though it's the container? Can't figure out how to seamlessly incorporate it otherwise.
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <GifList gifs={this.state.gifs} />
          </div>
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            <GifSearch handleSubmit={this.handleSubmit}/>
          </div>
        </div>
      </div>
    )
  }
}
