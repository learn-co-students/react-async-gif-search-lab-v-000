import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor(){
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount() {

  }

  genSearch = (url) => {
     fetch(url)
      .then(data=>data.json())
      .then(({data}) => this.setState({items: data.map(item => ({url: item.images.original.url}))}))
console.log(this.state)
  }


  render() {
    
    return (
      <div>
        <GifList items={this.state.items}/>
        <GifSearch genSearch={this.genSearch}/>
      </div>


    )
  }
}

export default GifListContainer
