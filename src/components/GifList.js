import React, {Component} from 'react'

export default class GifList extends Component {

  render() {

    function getURL(gif) {
      const url = gif.images.original.url
      const endIndex = url.indexOf(".gif")
      const result = url.slice(0, endIndex + 4)
      return result
    }

    const gifURLS = this.props.gifs.map(function(gif) {
      return getURL(gif)
    })

    const imgElements = gifURLS.map(function(url) {
      return <li><img src={url} alt="loading..."/></li>
    })

    return (
      <ul>{imgElements}</ul>
    )
  }
}
