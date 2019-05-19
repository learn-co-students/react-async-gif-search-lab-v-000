// It can render a top level <ul> with each gif as an <li>
import React, { Component } from 'react';

class GifList extends Component {

    render() {
        return(
            this.props.gifs.map(gif => 
            <ul>
            <li><img key={gif.url} src={gif.url} alt="animal"/></li>
            </ul>
            )
        )
    }
}

export default GifList