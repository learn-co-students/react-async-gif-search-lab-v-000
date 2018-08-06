import React, {Component} from 'react';

export default class GifList extends Component {
    render() {
        const array = this.props.gifs
        return(
            <div><ul>{array.map(gif => <li><img src={gif}></img></li>)}</ul></div>
        )
    }
}