import React, { Component } from 'react'

class GifList extends Component {

    
    render(){
        return(
            <div>
              <ul>
              {this.props.gifs.map(gif => <li><img key={gif.id} src={gif.url} alt="gif"/></li>)}
              </ul>
            </div>
        )
    }

}

export default GifList

//receives first 3 gif results as props from GifListContainer
// <GifList gifs={this.state.gifs} />