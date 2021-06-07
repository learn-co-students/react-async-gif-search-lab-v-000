import React from 'react'

export default class GifList extends React.Component {
  render() {
    console.log(this.props)
    return (
      
      <ul>
        {this.props.gifData.map(gif => <li><img key={gif.url} src={gif.url} alt="gif"/></li>)}
      </ul>
    )
  }
}