import React, { Component } from 'react'

export default class GifList extends Component {
  render() {
    return (
      <div>
       {this.props.gifs.map((gif, index) =>
         <ul key={index}>
           <img src={gif} />
         </ul>
       )}
      </div>
    )
  }
}
