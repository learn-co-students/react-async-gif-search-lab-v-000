import React from 'react'

class GifList extends React.Component {

    display = (gifs) => {
        return gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} alt={gif.title}/></li>)
    }

    render() {
        return (
            <ul>
                {this.display(this.props.gifs)}
            </ul>
            )
    }

}

export default GifList