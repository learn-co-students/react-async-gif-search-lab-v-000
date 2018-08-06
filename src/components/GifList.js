import React from 'react'

export default class GifList extends React.Component{
  render(){
    return(
      <ul>
        {this.props.gifs.map(gif => <li><img src={gif.url}></img></li>)}
      </ul>
    )
  }
}
