import React from 'react'

class GifList extends React.Component{


    render(){
        return(
            <ul>
                {this.props.gifs.map((gif,idx)=> <img key={idx} src={gif.images.original.url} alt="gif"/>)}
            </ul>

        )
    }
}
export default GifList;