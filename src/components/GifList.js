import React, {Component} from 'react'

export default class GifList extends Component {
  render(){
    return(
      <div>
        <ul>
        {this.props.gifLists.map(gif => <li><img src={gif.images.original.url} alt="boohoo"/></li>)}
        </ul>
      </div>
    )
  }
}