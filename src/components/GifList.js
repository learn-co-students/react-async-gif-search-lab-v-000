import React from 'react'

export default class GifList extends React.Component{
  const gifs = this.props.gifs.map(gif => <li><img src='{gif.url}'</li>)

  render(){
    return(
      <ul>
        {gifs}
      </ul>
    )
  }
}
