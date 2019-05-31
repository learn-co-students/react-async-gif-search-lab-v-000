import React from 'react'

export default class GifList extends React.Component {


    render(){
        return(
            <ul>
                {this.props.gifsList.map(gif => <li> <img key={gif.url} src={gif.images.original.url} alt={gif.slug} /> </li> )}
            </ul>
        )
    }
}