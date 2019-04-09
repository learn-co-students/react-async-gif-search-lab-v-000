import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  };

  fetchGifs(query="hello") {
    let path = `http://api.giphy.com/v1/gifs/search?q={query}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(path)
      .then(response => response.json())
      .then((gifs) => {
        this.setState({gifs: gifs.data.map(gif => ({url: gif.images.original.url}))})
      })
  }

  componentDidMount() {
    this.fetchGifs()
  }

  render() {
    return (
      <div>
        <p>Hello from GifListContainer</p>
        < GifSearch fetchGifs={this.fetchGifs}/>
        < GifList list={this.state.gifs}/>
      </div>
    )
  }

}
