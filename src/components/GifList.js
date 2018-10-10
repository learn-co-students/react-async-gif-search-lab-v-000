import React from 'react';

class GifList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
            {this.props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" />)}
            </ul>
        )
    }
}

export default GifList;