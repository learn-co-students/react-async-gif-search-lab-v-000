import React from 'react'

import GiftList from '../components/GiftList'
import GiftSearch from '../components/GiftSearch'

class GiftListContainer extends React.Component {
  state = {gifs: []}

  fetchGifs = (search) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json)
      .then(json => this.setState({ gifs: json })))
  }

  componentDidMount() {
    this.fetchGifs()
  }

  return (
    <div>
        < GiftList gifs={this.state.gifs}/>
        < GiftSearch fetchGifs={this.fetchGifs}/>
    </div>
  )
}

export default GiftListContainer
