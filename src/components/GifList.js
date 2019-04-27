import React, {Component} from 'react'

 export default class GifList extends Component {

   render() {
    const gifList = this.props.gifs.map((gif, id) =>
      <li key={id} style={{listStyleType: "none"}}>
        <img src={gif.url} alt="gif" />
      </li>
    )

     return(
      <div>
        <ul>
          {gifList}
        </ul>
      </div>
    )
  }
}
