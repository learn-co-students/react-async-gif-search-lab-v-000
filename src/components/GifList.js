import React, { Component } from 'react';

export default class GifList extends Component {

    render() {
        const allGifs = this.props.gifs.map((gif,index) => {
            return <li key={index} id={gif.id}>
            <img src={gif.images.original.url} alt={gif.slug}/>
           </li>})
        return (
            <ul>{allGifs} </ul>
        )

    }
}