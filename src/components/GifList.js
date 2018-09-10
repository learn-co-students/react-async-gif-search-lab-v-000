import React, { Component } from 'react'

const GifList = props => {
    return (
        <div>
            <ul style={{"listStyleType": "none"}}>
            {props.gifs.map(gif => <li key={gif.url}><img src={gif.url} alt="" /></li>)}
            </ul>
        </div>
    )
}


export default GifList