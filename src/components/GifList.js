import React, { Component } from 'react'
export default class GifList extends Component {

  render(){
    return(
      <div>
        <ul>
          {this.props.gifs.map(gif => <li><img key={gif.id} src={gif.url} alt={gif.slug}/></li>)} 
        </ul>
      </div>
    )
  }


}
