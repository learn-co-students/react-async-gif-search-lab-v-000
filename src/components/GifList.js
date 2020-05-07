import React, { Component } from 'react'

class GifList extends Component {
    
    

    render() {
        const gifs = this.props.gifs.map((gif) => {
            return(
                <li><img src={gif}/></li>
            )
        })
        return <ul>{gifs}</ul>
    }
}

export default GifList