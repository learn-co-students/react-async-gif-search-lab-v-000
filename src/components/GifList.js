import React, { Component } from 'react'

class GifList extends Component {
    generateGifList = () => {
        return this.props.gifs.map((gif) => { return <li key={gif.id}><img  src={gif.url} alt="A gif" /></li> })
    }

    render(){
        return(
            <ul>
                {this.generateGifList()}
            </ul>
        )
    }
}

export default GifList