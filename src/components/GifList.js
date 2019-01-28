import React, {Component} from 'react';

export default class GifList extends Component{

  render(){
    const firstThreeGifs = this.props.gifs.slice(0,2)

    return(
      <ul>
        {firstThreeGifs.map((gif, i) =>
          <li key={gif.url}>
            <img src={gif.url} alt={'gif # '+ (i+1) }/>
          </li>
        )}
      </ul>
    )
  }
}
