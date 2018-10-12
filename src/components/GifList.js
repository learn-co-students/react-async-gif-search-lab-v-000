import React from 'react'

export default class GifList extends React.Component {

    render() {
        console.log("giflist",this.props.gifs);
        return (
            <div>
                <h1>Gifs</h1>
                <ul>
                    {this.props.gifs ?
                        this.props.gifs.map(gif => <li>{gif.url}-{gif.slug}</li>)
                        : <p>fetching...</p>
                    }
                </ul>
            </div>
        )
    }
}

