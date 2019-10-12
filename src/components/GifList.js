import React, { Component } from 'react';


export default class GifList extends React.Component {

  render() {
    let gifArray= this.props.gifs
    let firstThree = gifArray.slice(0,3)

    return (
      <div>
        <ul>
          {firstThree.map(gif => <li><img key={gif.url} src={gif.url}/> </li>)}
        </ul>
      </div>
    )

  }

}
