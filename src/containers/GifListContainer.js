import React, {Component} from 'react';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
      search: 'dog'
    }
  }

  fetchGifs = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(list => {
      const firstThree = list.data.slice(0, 3).map(l => l.images.original.url)
      this.setState({
        gifs: firstThree
      })
    })
  }

  submitHandler = (event) => {
    this.setState({
      search: event.target.search.value
    })
  }

  componentDidMount() {
    this.fetchGifs()
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch submitHandler={this.submitHandler} />
      </div>
    )
  }
}
