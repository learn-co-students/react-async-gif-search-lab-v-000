import React from 'react'

class GifList extends React.Component {

    gifs = this.props.gifs

    render() {
        return (
            <div>
                <ul>
                {this.props.gifs.map(gif => <li><img key={gif.id} src={gif.url} alt={gif.slug}/></li>)}
                </ul>
            </div>
        )
    }
}

export default GifList