import React, {Component} from 'react'

export default class GifList extends Component {

    render() {
        const gifsList = this.props.gifs
        return (
            <ul>
                {gifsList.map((gif, index) => (
                    <li key={index}><img src={gif.images.original.url} alt='issue' /></li>
                ))}
            </ul>
        )
    }

}