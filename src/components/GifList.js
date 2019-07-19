import React, {Component} from 'react';

class GifList extends Component {

    render() {
        console.log(this.props.storedGifs);
        return(
            <div>
                <ul>
                    {this.props.storedGifs.map((gif, index) => <li key={`Gif-${index}`}><img key={gif.url} src={gif.url} alt="gif"/></li>)}
                </ul>
            </div>
        )
    }

}

export default GifList