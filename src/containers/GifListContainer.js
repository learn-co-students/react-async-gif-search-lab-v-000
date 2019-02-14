import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      gifList: []
    }
  }

  fetchData = (searchKeyword) => {
    let url = `http://api.giphy.com/v1/gifs/search?q=${searchKeyword}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    let urls = []
    fetch(url)
      .then(response => response.json())
        .then(data => {
          let urls = data.data.map(data => data.images.original.url )
          this.setState({gifList: urls})
        })
  }

  render() {
    return (
      <div>
        <GifSearch fetchData = { this.fetchData}/>
        <GifList gifList={ this.state.gifList } />
      </div>
    )
  }
}
