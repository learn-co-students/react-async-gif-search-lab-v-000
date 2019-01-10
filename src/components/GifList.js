import React, {Component} from "react";

export default class GifList extends Component {
    render() {
        return this.props.gifs.map(gif => {
            return (
            <li>
                <img key={gif.id} src={gif.url} alt="gif" />
            </li>
            )
        })
    }
}