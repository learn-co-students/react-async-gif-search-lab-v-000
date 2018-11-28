import React, {Component} from 'react'

export default class GifList extends Component {
  render() {
    let gifArray = this.props.gifs
    return(
      <div>
        {gifArray.map(gif => <img src={gif.url} alt="gif" key={gifArray.indexOf(gif)}/>)}
      </div>
    )
  }


}
