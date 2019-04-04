import React, {Component} from 'react';

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.results.map(result => <li><img src={result.url} alt='gif'/></li>)}
            </ul>
        )
    }
}
