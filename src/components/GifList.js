import React, { Component } from 'react'

export default class GifList extends Component {

  render() {
    return(
      <div>
        <br />
        <ul style={{'list-style-type' : 'none', 'display' : 'flex', 'flex-direction' : 'column'}}>
        {this.props.gifs.map((item, index) => { 
          return 
            <li><img src={item} key={index} alt={'Gif ' + index} style={{"max-height" : 150}} /></li>
          })}
        </ul> 
      </div>
    ) 
  }
}