//GifList receives data from its props and renders html
//top level- <ul> with each gif as <li>
import React, { Component } from 'react';

export default class GifList extends Component {
     render(){
        return(
            <ul>
            {this.props.gifs.map(gif => (
            <li key={gif.id} >< img src={gif.images.downsized.url} alt="gif"/></li>
            ))}
            </ul>
        )
    }
}
