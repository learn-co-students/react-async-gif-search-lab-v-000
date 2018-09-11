import React, { Component } from 'react'

export default class GifList extends Component {

  render() {
    return(
      <div>
        <br />
        {this.props.gifs.map((item, index) => { 
          return <img src={item} key={index} alt={'Gif ' + index} style={{"maxHeight" : 150, "maxWidth" : 150}} /> })}
      </div>
    ) 
  }
}