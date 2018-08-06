import React, { Component } from 'react'
import GifSearch from './GifSearch'

class GifList extends Component {

  render() {
    if(this.props.gifs.length > 0) {
      return(
        <div>
          <ul>
            <li><img src={this.props.gifs[0].images.downsized.url} alt="gif result"/></li>
            <li><img src={this.props.gifs[1].images.downsized.url} alt="gif result"/></li>
            <li><img src={this.props.gifs[2].images.downsized.url} alt="gif result"/></li>

          </ul>
        </div>
              )} else {
        return(<h3>What would you like to search for?</h3>)
    }

  }
}

export default GifList;
