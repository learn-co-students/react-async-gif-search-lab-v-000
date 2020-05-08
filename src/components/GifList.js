import React from 'react'

class GifList extends React.Component {

  render(){
    return (
      <ul>
        {this.props.gifs.map(gif => 
         <li><img src={gif.url} /></li> )}
      </ul>
    )
    
  }
}

export default GifList