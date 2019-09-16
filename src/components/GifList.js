import React, { Component } from 'react'

class GifList extends Component {

  render() {
    console.log(this.props)
  return( 
    <ul>
    <li><img src={this.props.images[0]} /></li>
    <li><img src={this.props.images[1]} /></li>
    <li><img src={this.props.images[2]} /></li>
    </ul>
  );
  
}
}


export default GifList
