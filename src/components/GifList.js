import React, {Component} from 'react';

class GifList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <ul>
                {this.props.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt="gif"/></li>)}
                </ul>
            </div>
        )
    }
}

export default GifList


