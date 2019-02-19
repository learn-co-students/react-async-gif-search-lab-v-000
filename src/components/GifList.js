import React from 'react'

export default class GifList extends React.Component{

  render(){
    return(
      <ul>
        {this.props.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt="gif"/></li>)}
      </ul>
    )
  }
}
