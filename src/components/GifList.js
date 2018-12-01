import React, { Component } from 'react';

export default class GifList extends Component {

  render() {
    const liArray = []
    this.props.shortList.forEach(gif => {
      liArray.push( <li><img src={gif} /></li> )
    })

    return (
      <ul>
        {liArray}
      </ul>
    )
  }
}
