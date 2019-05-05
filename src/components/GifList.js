import React, {Component} from 'react';


    class GifList extends Component {
      render() {
            const gifPics = this.props.gifs.map((gif, index)=>(
              <img key={index} src={gif.url} alt="gif" />
            ))
              return(
            <ul>
            <li> {gifPics} </li>
            </ul>
      )}
  }


export default GifList
