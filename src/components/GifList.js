import React from 'react'

class GifList extends React.Component {

    render(){        
        return(
            <div>
               
                {this.props.list.map(gif => <li key={gif.id}><img alt="gifs images" src={gif.images.original.url}></img></li>
                )}
                
            </div>
        )
    }
}

export default GifList